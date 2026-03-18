# DeliciasBakery

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 21.1.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## BakeryFlow proxy

This project now proxies BakeryFlow under:

- `https://deliciasbakery.shop/bakeryFlow/`
- `https://deliciasbakery.shop/bakeryFlow/api/`

Permanent code changes:

- [nginx.conf](/Users/juanarias/Workspaces/Web/deliciasBakery/nginx.conf) adds `location /bakeryFlow/` and `location /bakeryFlow/api/`
- [docker-compose.yml](/Users/juanarias/Workspaces/Web/deliciasBakery/docker-compose.yml) connects the `web` service to the external Docker network `bakeryflow_internal`
- the main site remains intact at `/`

How it works:

- the main Nginx container still serves Delicias Bakery on `/`
- requests to `/bakeryFlow/` are proxied to `http://bakeryflow-frontend:8085/`
- requests to `/bakeryFlow/api/` are proxied to `http://bakeryflow-backend:8086/api/`
- public login for BakeryFlow is `POST https://deliciasbakery.shop/bakeryFlow/api/auth/login`
- public Swagger is exposed at `https://deliciasbakery.shop/bakeryFlow/api/swagger`
- `/bakeryFlow/api` redirects to `/bakeryFlow/api/` so the API root never falls through to the frontend
- name resolution works because the `web` container joins the `bakeryflow_internal` network used by BakeryFlow
- Nginx uses runtime DNS re-resolution for `bakeryflow-frontend` and `bakeryflow-backend`, so it keeps working after BakeryFlow recreates containers with new IPs
- the `/bakeryFlow/api/` block must stay above `/bakeryFlow/` so API requests never fall through to the frontend

Deployment note:

- BakeryFlow must already be deployed so the Docker network `bakeryflow_internal` exists on the VPS
- verify it with `docker network inspect bakeryflow_internal`
- redeploy order: first BakeryFlow, then DeliciasBakery if Nginx config changed
- if BakeryFlow was redeployed and DeliciasBakery kept old upstream IPs in memory, redeploying DeliciasBakery reloads the main Nginx with the fresh dynamic proxy config
- after redeploying this project, Nginx will route both apps from the same public port 80

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
