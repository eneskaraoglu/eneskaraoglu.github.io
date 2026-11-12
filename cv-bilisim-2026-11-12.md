# Enes Karaoglu — Technical Skills & Tech Stack

_Generated 2026-11-12 from 11 Bilisim production projects._

Senior full-stack / backend engineer with 15+ years across the enterprise Java
ecosystem — from legacy Java EE (Seam/EJB/JBoss) monoliths and a 5,000-class
Swing/Hibernate ERP core to modern Spring Boot 3 / Java 21 modular monoliths,
React 19 SPAs, real-time stream processing, a Go-based on-prem update & fleet
agent, and AI/LLM-powered ERP and service-desk tooling. Deep specialization in
ERP, MES (Manufacturing Execution Systems), warehouse / shop-floor domains, and
on-prem delivery & operations for Turkish manufacturing customers.

---

## Core Competencies (Skills Summary)

**Languages**
Java (6 → 21), Go 1.26+, TypeScript 5.9, Python 3.11, SQL/PL-SQL, JavaScript,
HTML/SCSS, Bash, PowerShell

**Backend Frameworks**
Spring Boot 3.3 / 2.1, Spring Modulith, Spring Framework 5 (MVC), Spring
Security (JWT, OAuth2 authorization/resource server), Spring Data JPA, Spring
WebFlux (`WebClient`), Spring Retry, Spring AOP, Spring WebSocket, JBoss Seam
2.3, Java EE 5/6 (EJB 3.x, JSF 2.x, Facelets, JAX-WS), Hibernate (3 → 6) / JPA,
FastAPI, SQLAlchemy 2 + Alembic, Pydantic, APScheduler, Go (chi router, cobra
CLI, pgx, kardianos/service, robfig/cron)

**Frontend & UI**
React 19, Angular 7, Vite 7, React Router 7, TanStack Query / Table / Virtual,
Zustand, React Hook Form + Zod, Tailwind CSS + Headless UI, Mantine 8, AG-Grid,
DHTMLX Gantt, Recharts, PrimeNG / PrimeFaces (Mobile, Extensions),
DevExtreme, RichFaces, Thymeleaf, htmx + Jinja2, Alpine.js, Tabler, Chart.js,
Bootstrap, TinyMCE / Quill, i18next / ngx-translate, Java Swing (JNLP / Web
Start desktop client, FlatLaf, JTattoo)

**AI / LLM / ML**
Multi-provider LLM integration (Anthropic Claude Messages API, Google Gemini,
OpenAI-compatible gateways, Ollama) behind a DB-configured client registry,
self-hosted OpenAI-compatible LLMs (Gemma) with function / tool calling, image
input and audio transcription, RAG pipelines, sentence-transformers
(multilingual MiniLM), FAISS vector search, PyTorch, LLM intent routing, Turkish
text normalization, AI ticket triage & reply suggestions with human-in-the-loop
feedback, prompt / rule management from an admin panel, AI-assisted development
and code review workflows (Claude Code)

**Databases, Caching & Storage**
Oracle (10g → 21), PostgreSQL (16 → 18), Redis (Jedis), SQLite (modernc
pure-Go, SQLAlchemy / WAL), H2 / HSQLDB, HikariCP, Hibernate second-level cache
(Ehcache), Flyway, Alembic, S3-compatible object storage (SeaweedFS / MinIO,
aws-sdk-go-v2)

**Messaging, Streaming & Real-time**
Apache Flink (stream processing), MQTT (Eclipse Paho), WebSocket / STOMP /
SockJS, Redis Pub/Sub, Firebase Cloud Messaging

**Integration & APIs**
REST APIs (springdoc / Springfox / Swagger), contract-first OpenAPI 3
(oapi-codegen, openapi-typescript, Spectral linting, JSON Schema), SOAP /
JAX-WS / JAX-RPC / Apache Axis, JWT (HS256/HS512), Keycloak OIDC (multi-tenant
realms, go-oidc, oidc-client-ts), ManageEngine ServiceDesk Plus V3 API, Jira
API, Google Calendar API, Turkish e-government & fiscal integrations (GİB
e-Defter / e-Beyanname, TurkKEP e-Fatura / e-İrsaliye / e-Defter, UBL 2.0,
ELogo, EDI), bank clients (Albaraka, QNB), e-signature (PKCS#11 / IAIK), SMTP /
Gmail report mailing, JSch (SFTP), serial-port (RXTX)

**Rules & Workflow**
Drools (business rules / Seam security), jBPM (jPDL workflow)

**Reporting & Documents**
JasperReports, Apache POI / JExcelApi / openpyxl / SheetJS (Excel), iText /
PDFBox / OpenPDF / WeasyPrint (PDF), python-docx / pdfplumber (Word & PDF text
extraction), JFreeChart, Velocity templates, ZXing / Barbecue (barcodes & QR)

**Build, Testing & Tooling**
Maven (multi-module, wrapper), Go workspaces + Make (~45 targets),
golangci-lint, npm / Vite / Angular CLI, ESLint 9/10 + typescript-eslint,
Eclipse WTP, Lombok, MapStruct, JUnit 4/5, Mockito, REST Assured, Spring
Modulith structure tests, pytest + respx, Vitest + Testing Library,
Playwright, Karma / Jasmine, Protractor, testcontainers-go, race-detector
gates, chaos / fault-injection runs, git pre-commit hooks

**DevOps & Infrastructure**
Docker (multi-stage, BuildKit / buildx, non-root images, healthchecks), Docker
Compose (dev / test / prod overlays), Apache Tomcat 9, JBoss AS 7 / WildFly,
Nginx (HTTP/2, gzip, micro-cache, security headers), Caddy, Jenkins CI/CD
(Linux + Windows runners, nightly chaos jobs), Atlassian Bamboo Specs, Harbor
private registry, SonarQube, Bitbucket, Windows services / Task Scheduler /
systemd units, signed release bundles & channels (dev → qa → pilot → GA),
cross-compiled static Go binaries, PowerShell / bash install & release scripts

**Security**
OAuth2 / JWT / OIDC, RBAC with column-level permissions, multi-tenant isolation
enforced server-side, Fernet-encrypted secrets at rest, bcrypt password
hashing, Windows DPAPI, Ed25519 payload signatures, signed update bundles,
outbound-only agent model (no inbound ports or tunnels), HTTP audit trails,
consent-gated telemetry, AES-encrypted SOAP payloads, CVE-pinned dependencies

---

## Project Portfolio

### ERP Plus Suite (erp-plus) — Modern ERP Platform (flagship)
Modular-monolith backend + React SPA that modernizes the legacy Core ERP without
replacing it: reads the shared Oracle schema via JPA, writes through JWT-secured
REST calls to Core ERP behind a circuit breaker. Hub shell for three products:
ERP Plus, APS (advanced planning) and Mutabakat (account reconciliation).
- **Backend:** Java 21, Spring Boot 3.3.4, Spring Modulith 1.2.5 (12 domain
  modules + infrastructure, enforced by `ModularityTests`), Hibernate 6, Spring
  Security + jjwt, WebFlux `WebClient`, Spring Retry, AOP action logging, HTTP
  audit filter, JPA Specifications, factory-scoped (`fabrikaKod`) multi-site data,
  springdoc-openapi, Actuator, Spring Mail, OpenPDF, Lombok
- **Frontend:** React 19.2, TypeScript 5.9, Vite 7.2, React Router 7.13,
  TanStack Query 5, Zustand 5, Axios, Tailwind CSS 3.4 + Headless UI, React Hook
  Form + Zod 4, AG Grid 35, Recharts 3, DHTMLX Gantt 9, i18next, SheetJS,
  react-markdown, react-quill-new; 16 feature modules with role/permission routes
- **AI:** Anthropic Claude API via WebClient (schedule-risk scoring & narratives
  for project management); `/ai-chat` route to the erpLlm FastAPI service
- **Data:** Oracle 21 (ojdbc11) default, PostgreSQL profile
- **DevOps:** Multi-stage Docker (Temurin 21 / node 20 + nginx), Jenkins
  pipelines (dev / master / release), Bamboo Specs v2, Harbor registry,
  per-product docker-compose + Nginx SSL configs (erp-docker), deploy script
  with volume backup and healthcheck wait
- **Scale:** ~750 Java files (~70K LOC) · ~440 TS/TSX files (~91K LOC)

### Core ERP (erp-git-maven) — Enterprise ERP Monolith
Full Turkish-market ERP ("UrtWEB" 4.0.x): signed Java Web Start Swing MDI client
talking to a Tomcat servlet backend through a command-dispatching FrontController,
with the same business layer exposed as a Spring MVC REST API consumed by ERP
Plus, Pulse (DeskIQ), the on-prem agent and external integrations.
- **Stack:** Java 8, Spring MVC 5.2.9, Hibernate 3.6.10 (~724 `.hbm.xml`
  mappings), 5 Maven modules (Appcore · EJB business layer with ~465 DAOs · GUI
  with ~2,400 screens · RestApi · WEB), jjwt HS512, MapStruct, Jackson/Gson,
  Springfox/Swagger
- **UI:** Swing + JTattoo / FlatLaf / GlazedLists, DJNativeSwing embedded
  browser, launched via JNLP; no-code screen wizard and per-customer screen /
  theme customization
- **REST layer:** ~18 base paths (stok, satis, satinalma, finans, uretim, kalite,
  mdepo, mutabakat, entegrasyon, wizard, license…), DeskIQ CRM API, telemetry,
  exception-log and backup-report APIs for the on-prem agent, column-level
  permissions, API-key + JWT auth
- **Integrations:** Axis 1.4 SOAP clients, TurkKEP e-Fatura / e-İrsaliye /
  e-Defter, GİB e-Defter & e-Beyanname, UBL 2.0, ELogo, Albaraka & QNB bank
  clients, PKCS#11 e-signature, EDI reader, Redis (Jedis), JSch SFTP, JavaMail,
  Selenium / HtmlUnit automation, RXTX serial, License4J
- **Reporting:** JasperReports, iText, PDFBox, ICEpdf, POI, JFreeChart,
  Velocity, ZXing / Barbecue barcodes
- **Data:** Oracle (primary), PostgreSQL, HSQLDB; JSqlParser
- **DevOps:** Layer-optimized Tomcat 9 Docker image (`tomcat:9.0-jdk8-temurin`),
  compose dev/prod, three Jenkinsfiles (release / dev / agent release), Harbor,
  SonarQube, ~60 vendor jars installed via scripts, git-tag driven versioning,
  signed WAR release bundles published to the agent control plane
- **Scale:** ~5,100 Java files

### BilisimERP Agent (erpagent) — On-prem ERP Update & Fleet Monitoring
Outbound-only update and monitoring system for ERP instances at customer sites
(Tomcat WAR on Windows or Docker Compose on Linux, against Oracle). An on-host
agent pulls jobs from a central control plane and runs preflight → snapshot →
stop → deploy → start → health check with automatic rollback, reporting version,
health and consent-gated telemetry. Replaces a manual VPN/RDP process; every
step is explainable (`doctor` / `plan` / reasoned step log).
- **Agent:** Go 1.26 single static cross-compiled binary (Windows service /
  systemd via kardianos/service), cobra CLI, embedded SQLite (modernc),
  DPAPI-sealed secrets, exponential backoff, file locking, JSON-Schema validated
  configs, self-update; never connects to the customer's Oracle DB — telemetry
  comes from the application's own REST endpoint
- **Control plane:** Go, chi router, PostgreSQL 16 (pgx) + Flyway 11 (48
  migrations), Keycloak 26 OIDC (realm per tenant + staff realm, issuer → tenant
  mapping via go-oidc / go-jose), S3 artifact store (aws-sdk-go-v2 / SeaweedFS),
  robfig/cron scheduler, job leasing, Ed25519 signing and trust rotation, alerts,
  customer portal API, DeskIQ REST client, Caddy reverse proxy
- **Contract:** OpenAPI 3 as single source of truth (public, internal, portal
  specs + JSON Schemas) — oapi-codegen (Go server/client), openapi-typescript,
  Spectral linting, `gen-check` CI gate
- **Panel:** React 19.3, TypeScript 5.9, Vite 7.3, Mantine 8, TanStack Table /
  Virtual, React Router 7, oidc-client-ts; Vitest + Testing Library + Playwright
- **Quality & CI:** Go workspace + Make (~45 targets), golangci-lint v2, `-race`
  tests (~220 Go test files), testcontainers-go e2e against real PostgreSQL and
  the real agent binary, chaos / fault-injection runs, Jenkins on Linux + Windows
  runners with nightly chaos job, git pre-commit hooks, release channels
  dev → qa → pilot → genel
- **Scale:** ~480 Go files · ~180 TS/TSX files · architecture, decision and
  transparency docs

### Pulse by Bilişim (formerly DeskIQ) — Operations Intelligence Platform
Started as reporting and support intelligence on top of ManageEngine ServiceDesk
Plus (full + 10-minute delta ticket sync, report builder, scheduled e-mail
reports) and grew into the company's internal operations platform: CRM and
leads, customers and licences, projects and worklogs, sales quotes with PDF
generation, targets, meetings, travel, notifications, Jira integration, AI
assistants, audit log, roles and users.
- **Stack:** Python 3.11, FastAPI 0.116, Uvicorn, SQLAlchemy 2, Alembic (~190
  migrations), psycopg 3, Pydantic Settings, APScheduler, httpx (paginated,
  retrying SDP V3 client), PyJWT
- **AI:** Self-hosted OpenAI-compatible LLM (Gemma) over httpx with function /
  tool calling and JSON fallback, image input and audio transcription — ticket
  triage, request / person analysis, consultant reply suggestions, AI-filled
  forms, AI chat assistant with tools, prompt & rule management, validation and
  feedback loop
- **Frontend:** Jinja2 server-rendered Turkish UI (~230 templates), htmx,
  Bootstrap, Chart.js, TinyMCE
- **Data & Storage:** PostgreSQL 18, SQLite (dev), S3-compatible object storage
  (SeaweedFS, migrated from MinIO)
- **Integrations:** ServiceDesk Plus V3, Jira (issues, time tracking), Core ERP
  REST client + event service, Gmail SMTP (HTML + Excel via openpyxl), WeasyPrint
  PDF quotes, python-docx / pdfplumber document parsing; REST API consumed by the
  ERP agent
- **Security:** Fernet-encrypted credentials, JWT + RBAC, API keys, audit log,
  CVE-pinned deps
- **DevOps:** Docker image with `alembic upgrade` on start, compose overlays
  (dev / test / prod / Nginx), Jenkins CI/CD pipelines, Harbor publish script,
  PowerShell native installer + Windows Task Scheduler
- **Testing:** pytest + respx (~160 test files), pyflakes dead-code gate
- **Scale:** ~620 Python files, 45 route modules, ~120 service modules, ~80
  model modules

### erpLlm (erp-ai) — ERP AI Chat Assistant
On-prem Turkish-language assistant answering natural-language questions over ERP
docs and live ERP data. Shared service called by Core ERP, ERP Plus, MVardiya
and MDepo, managed from its own admin panel.
- **Stack:** Python 3.11, FastAPI 0.115, Uvicorn, Jinja2, SQLAlchemy 2 over
  SQLite (WAL), signed-cookie sessions, passlib + bcrypt
- **AI/RAG:** sentence-transformers (multilingual MiniLM-L12, loaded locally),
  FAISS `IndexFlatL2` over ~7,300 curated Q&A pairs with cached embeddings,
  PyTorch; LLM intent router → live ERP data / RAG + LLM / free ask
- **LLM backends:** provider registry in the database — Ollama, OpenAI-compatible
  endpoints, Anthropic Messages API, Google Gemini, or a no-LLM passthrough —
  with per-client timeouts and context caps
- **Admin panel:** htmx + Alpine.js + Tabler — usage and intent-accuracy
  dashboard, Q&A log browser, LLM clients, ERP services, intent examples,
  prompts, users, settings
- **Integration:** "ERP Wizard API" gateway exposing whitelisted views as JSON
  behind an API-key header
- **DevOps:** Multi-stage Docker, compose dev/prod, Harbor

### BilisimERP 4.0 (Spring) — Cloud ERP Backend ("BulutERP")
Modular-monolith cloud ERP REST backend covering sales, purchasing, stock, MES,
mobile API and general definitions.
- **Stack:** Java 8, Spring Boot 2.1.6, 12-module Maven build (core, auth,
  core-lib, dvo, firebase + 7 business modules), Spring Data JPA + Hibernate
  (Oracle dialect, Ehcache L2), Spring JDBC, Actuator, Mail, Thymeleaf, Spring
  Data REST HAL browser
- **Security:** Spring Security OAuth2 (authorization + resource server),
  spring-security-jwt
- **Real-time:** Spring WebSocket hub receiving the MES machine-data stream
- **Data:** Oracle (ojdbc8), Redis (Jedis) cache & pub/sub
- **Integrations:** Firebase Cloud Messaging push (mobile), ERP REST client,
  scheduled jobs, Apache POI Excel import/export, jsoup, Springfox Swagger
- **Testing / DevOps:** JUnit + REST Assured, Docker executable jar
- **Scale:** ~370 Java files

### BilisimERP 4.0 UI (akillimobilsaha) — ERP / MES Web SPA
Angular single-page ERP frontend whose core is a real-time MES "Live Machine
Monitor" (downtime logging, operator / machine selection, external setup,
warm-up), plus dashboard, calendar, JWT auth with interceptors and route guards.
- **Stack:** Angular 7.2, TypeScript 3.2, RxJS 6, SCSS, Angular CDK
- **UI:** PrimeNG 7, DevExtreme 19 (Gantt, Diagram), AG-Grid 20, ngx-bootstrap,
  Bootstrap 4, angular-calendar, gridster2 dashboards, Quill, ng-select,
  ngx-toastr, SweetAlert2
- **Real-time:** SockJS + STOMP WebSocket service (live machine data)
- **Auth / i18n:** @auth0/angular-jwt, ngx-translate; Google Calendar API
- **In-house packages:** private `@bilisim/common` / `@core/common` npm libs
- **DevOps:** Angular CLI prod build served by Nginx; Karma / Jasmine +
  Istanbul, Protractor e2e

### bilisim-mes — Real-time MES Stream Processor
Apache Flink streaming job ingesting CNC/PLC machine signals over MQTT,
evaluating machine-state rules, keeping state in Redis and pushing results to
the ERP backend over WebSocket and REST.
- **Stack:** Java 8, Apache Flink 1.9 (custom source / sink / flat-map
  functions), Eclipse Paho MQTT, Jedis (pool + pub/sub), Tyrus WebSocket client,
  Apache HttpClient, Gson, SLF4J / Log4j
- **Build:** Maven shaded uber-JAR for Flink cluster submission; externalized
  `config.properties`
- **Architecture:** MQTT source → rule flat-map → Redis state / pub-sub →
  WebSocket + HTTP sinks

### MDepo — Mobile Warehouse Management
JBoss Seam mobile warehouse / stock app for handheld devices: warehouse transfer
orders, bulk stock issue and shipment against dispatch plans, work-order stock
reservation, barcode workflows.
- **Stack:** Java 6, JBoss Seam 2.3, EJB 3.0, JSF 2.0 / Facelets, Hibernate 3 /
  JPA, Hibernate Tools reverse engineering, Spring 3
- **UI:** PrimeFaces 4.0 + PrimeFaces Mobile, RichFaces (legacy)
- **Rules / Workflow:** Drools (Seam security), jBPM jPDL
- **Integration:** ERP SOAP client (Axis / JAX-RPC from WSDL); POI / JXL,
  iText / PDFBox; multi-language labels (TR / EN / DE / FR / BG)
- **Data:** Oracle 10g (JTA datasource); **Server:** JBoss AS 7.1.1 (EAR + EJB +
  WAR, Eclipse WTP)
- **DevOps (recent):** Dockerfile + bash EAR packaging, compose dev/prod, Harbor
  push script
- **Scale:** ~95 Java files; 445 commits, actively maintained through 2026

### MVardiya — Mobile Shift Management & Shop-floor Data Collection
Mobile shift-management (vardiya) app for ERP production: setup / work start &
finish on work orders, bulk finish with material consumption, downtime entry,
quality and defect recording, machine and team selection, SSO login.
- **Stack:** Java 6, JBoss Seam 2.3 + Spring 3, EJB 3.0, JSF 2.x, Hibernate 3 /
  JPA, Gson, Commons FileUpload
- **UI:** PrimeFaces + PrimeFaces Mobile, RichFaces
- **Rules / Workflow:** Drools, jBPM
- **Integration:** ERP SOAP clients (Axis / JAX-RPC)
- **Reporting:** JFreeChart, iText, JExcelApi
- **Data:** Oracle 10g; **Server:** JBoss AS 7.1.1 (multi-module EAR)
- **DevOps / Process:** Same Docker + Harbor setup as MDepo; AI-assisted
  (Claude Code) code-review reports in `docs/team-reports`
- **Scale:** ~125 Java · ~55 XHTML; ~1,390 commits, actively maintained through
  2026

### ISYS (BilisimPM) — Manufacturing Project & Capacity Management
Java EE EAR for production planning and monitoring on top of the ERP: work
orders, capacity planning & scheduling, work-order Gantt, machine status and
utilization reports; integrates with the ERP and the İşakış workflow system and
exposes its own SOAP services.
- **Stack:** Java EE 6 (Java 6), JBoss Seam, EJB 3.x, JSF + PrimeFaces 5.1 +
  Extensions 3.0, Hibernate 3 / JPA (Ehcache), Joda-Time, jsoup, Guava
- **UI:** PrimeFaces Timeline / Schedule / charts, DHTMLX Gantt, CKEditor /
  CodeMirror, Font Awesome
- **Rules / Workflow:** Drools, jBPM
- **Integration:** erp-ws-client and isakis-ws-client SOAP clients (Axis /
  JAX-RPC); web-servis-ejb SOAP endpoints; iText PDF, POI Excel, JavaMail
- **Data:** Oracle (ojdbc6); **Server:** JBoss AS 7 (Eclipse WTP EAR, 6 modules)
- **Scale:** ~215 Java · ~30 XHTML

---

## Domain Expertise

- **ERP** — sales, purchasing, stock / inventory, finance, quality, project
  management, account reconciliation, e-document / fiscal compliance
- **MES** — real-time CNC/PLC monitoring, downtime / OEE tracking, shop-floor
  data collection, live screens
- **Warehouse & Logistics** — mobile stock operations, transfers, shipment,
  barcode workflows
- **Manufacturing PM** — work orders, capacity planning & scheduling, shift
  management, Gantt / timeline planning (APS)
- **On-prem delivery & operations** — automated ERP updates with rollback,
  signed release channels, fleet telemetry, multi-tenant control plane
- **Service desk & operations analytics** — SLA / technician performance, CRM,
  sales quoting, AI ticket triage
- **AI-assisted enterprise software** — RAG assistants, LLM tool calling,
  multi-provider LLM gateways, NL data querying, AI-assisted code review
