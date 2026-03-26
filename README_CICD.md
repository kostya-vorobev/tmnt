CI/CD setup
===========

This repository contains a simple Node.js app and example CI/CD pipeline to build a Docker image, push it to GitHub Container Registry (GHCR) and deploy to a remote host via SSH.

Required repository secrets (Settings → Secrets → Actions):

- `GITHUB_TOKEN` — automatically provided by GitHub Actions (used for GHCR login)
- `SSH_PRIVATE_KEY` — private SSH key for the deploy user on the remote host
- `DEPLOY_USER` — username on the remote host
- `DEPLOY_HOST` — host/IP of the remote server

What the workflow does
- On pull requests and pushes to `main` it runs `npm test`.
- If tests pass it builds a Docker image and pushes tags to `ghcr.io/${{ github.repository_owner }}/tmnt-node-ci`.
- On successful push to `main` it SSHes to the remote host and restarts the container with the new image.

Notes and next steps
- Ensure Docker is installed on the remote host and the deploy user can run `docker` (or use sudo in the SSH command).
- Optionally replace GHCR with Docker Hub by changing the login and tags in `.github/workflows/ci-cd.yml`.
- If your app should listen on a port, update `src/app.js` and expose the port in the `docker run` command.
Local deployment
------------

To build and run the container locally using Docker CLI:

```bash
docker build -t tmnt-node-ci:local .
docker run -d --name tmnt -p 3000:3000 --restart always tmnt-node-ci:local
```

To build and run using Docker Compose:

```bash
docker-compose up -d --build
```

Requirements:
- Docker (Desktop or Engine) installed and running on your machine.

To stop and remove the container:

```bash
docker-compose down
# or
docker stop tmnt && docker rm tmnt
```

