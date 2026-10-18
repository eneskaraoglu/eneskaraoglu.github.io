# Enes Karaoglu — Technical Skills & Tech Stack

_Generated 2026-10-16 from 12 Bilisim production projects._

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
Java (6 → 21), Go 1.26, TypeScript 5.9, Python 3.11, SQL/PL-SQL, JavaScript,
HTML/SCSS, Bash, PowerShell

**Backend Frameworks**
Spring Boot 3.3 / 2.1, Spring Modulith, Spring Framework 5 (MVC), Spring
Security (JWT, OAuth2 authorization/resource server), Spring Data JPA, Spring
WebFlux (`WebClient`), Spring Retry, Spring AOP, Spring WebSocket, JBoss Seam
2.3, Java EE 5/6 (EJB 3.x, JSF 2.x, Facelets, JAX-WS), Hibernate (3 → 6) / JPA,
FastAPI, SQLAlchemy 2 + Alembic, Pydantic, APScheduler, Go (chi router, cobra
CLI, pgx, kardianos/service)

**Frontend & UI**
React 19, Angular 7, Vite 7, React Router 7, TanStack Query / Table / Virtual,
Zustand, React Hook Form + Zod, Tailwind CSS + Headless UI, Mantine 8, AG-Grid,
DHTMLX Gantt / Scheduler, Recharts, PrimeNG / PrimeFaces (Mobile, Extensions),
DevExtreme, RichFaces, Thymeleaf, htmx + Jinja2, Alpine.js, Chart.js, Bootstrap,
i18next / ngx-translate, Java Swing (JNLP / Web Start desktop client, FlatLaf,
JTattoo)

**AI / LLM / ML**
Anthropic Claude API integration (schedule-risk analysis, narratives, AI chat),
self-hosted OpenAI-compatible LLMs (Gemma) with function / tool calling, Ollama
(Llama 3.1, Gemma), RAG pipelines, sentence-transformers (multilingual MiniLM),
FAISS vector search, PyTorch, Turkish text normalization, AI ticket triage &
reply suggestions with human-in-the-loop feedback, prompt/rule management,
AI-assisted code review workflows (Claude Code)

**Databases, Caching & Storage**
Oracle (10g → 21), PostgreSQL (16 / 17), Redis (Jedis), MongoDB, SQLite
(modernc pure-Go, SQLAlchemy), H2 / HSQLDB, HikariCP, Hibernate second-level
cache (Ehcache), Flyway (Go control plane), Alembic, S3-compatible object
storage (SeaweedFS / MinIO)

**Messaging, Streaming & Real-time**
Apache Flink (stream processing), MQTT (Eclipse Paho), WebSocket / STOMP /
SockJS, Redis Pub/Sub, Firebase Cloud Messaging

**Integration & APIs**
REST APIs (springdoc / Springfox / Swagger), contract-first OpenAPI 3
(oapi-codegen, openapi-typescript, Spectral linting, JSON Schema), SOAP /
JAX-WS / JAX-RPC / Apache Axis, JWT (HS256/HS512), Keycloak OIDC (multi-tenant
realms), ManageEngine ServiceDesk Plus V3 API, Jira API, Google Calendar API,
Turkish e-government & fiscal integrations (GİB e-Defter / e-Beyanname, TurkKEP
e-Fatura / e-İrsaliye / e-Defter, UBL 2.0, ELogo, EDI), bank clients (Albaraka,
QNB), e-signature (PKCS#11 / IAIK), SMTP / Gmail report mailing, JSch (SFTP),
serial-port (RXTX)

**Rules & Workflow**
Drools (business rules / Seam security), jBPM (jPDL workflow)

**Reporting & Documents**
JasperReports, Apache POI / JExcelApi / openpyxl / SheetJS (Excel), iText /
PDFBox / OpenPDF / WeasyPrint (PDF), JFreeChart, Velocity templates, ZXing /
Barbecue (barcodes & QR)

**Build, Testing & Tooling**
Maven (multi-module, wrapper), Go workspaces + Make (~40 targets),
golangci-lint, npm / Vite / Angular CLI, ESLint 9/10 + typescript-eslint,
Eclipse WTP, Lombok, MapStruct, JUnit 4/5, Mockito, REST Assured, Spring
Modulith structure tests, pytest + respx, Vitest + Testing Library,
Playwright, Karma / Jasmine, Protractor, testcontainers-go, race-detector
gates, chaos / fault-injection runs, git pre-commit hooks

**DevOps & Infrastructure**
Docker (multi-stage, BuildKit / buildx, non-root images, healthchecks), Docker
Compose (dev / prod overlays), Apache Tomcat 9, JBoss AS 7 / WildFly, Nginx
(HTTP/2, gzip, micro-cache, security headers), Jenkins CI/CD (Linux + Windows
runners, nightly chaos jobs), Atlassian Bamboo Specs, Harbor private registry,
SonarQube, Bitbucket, Windows services / Task Scheduler / systemd units, signed
release bundles & channels (dev → qa → pilot → GA), cross-compiled static Go
binaries, PowerShell / bash install & release scripts

**Security**
OAuth2 / JWT / OIDC, RBAC with column-level permissions, Fernet-encrypted
secrets at rest, Windows DPAPI, Ed25519 payload signatures, signed update
bundles, outbound-only agent model (no inbound ports or tunnels), HTTP audit
trails, consent-gated telemetry, AES-encrypted SOAP payloads, CVE-pinned
dependencies

---

## Project Portfolio

### ERP Plus Suite (erp-plus) — Modern ERP Platform (flagship)
Modular-monolith backend + React SPA that modernizes the legacy Core ERP without
replacing it: reads the shared Oracle schema via JPA, writes through JWT-secured
REST calls to Core ERP behind a circuit breaker. Hub shell for three products:
ERP Plus, APS (advanced planning) and Mutabakat (account reconciliation).
- **Backend:** Java 21, Spring Boot 3.3.4, Spring Modulith 1.2.5 (13 domain
  modules + infrastructure, enforced by `ModularityTests`), Hibernate 6, Spring
  Security + jjwt, WebFlux `WebClient`, Spring Retry, AOP action logging, HTTP
  audit filter, JPA Specifications, factory-scoped (`fabrikaKod`) multi-site data,
  springdoc-openapi, OpenPDF, Lombok
- **Frontend:** React 19.2, TypeScript 5.9, Vite 7.2, React Router 7.13,
  TanStack Query 5, Zustand 5, Axios, Tailwind CSS 3.4 + Headless UI, React Hook
  Form + Zod 4, AG Grid 35, Recharts 3, DHTMLX Gantt 9, i18next, SheetJS,
  react-markdown, react-quill-new; 16 feature modules with role/permission routes
- **AI:** Anthropic Claude API via WebClient (schedule-risk scoring & narratives
  for project management); `/ai-chat` route to the erpLlm FastAPI service
- **Data:** Oracle 21 (ojdbc11) default, PostgreSQL profile
- **DevOps:** Multi-stage Docker (Temurin 21 / node 20 + nginx), Jenkins
  pipelines, Bamboo Specs v2 (parallel backend/frontend build & push), Harbor
  registry, per-product docker-compose + Nginx SSL configs (erp-docker)
- **Scale:** ~648 Java files (~61K LOC) · ~359 TS/TSX files (~75K LOC)

### Core ERP (erp-git-maven) — Enterprise ERP Monolith
Full Turkish-market ERP ("UrtWEB" 4.0.1): signed Java Web Start Swing MDI client
talking to a Tomcat servlet backend through a command-dispatching FrontController,
with the same business layer exposed as a Spring MVC REST API consumed by ERP
Plus, DeskIQ and external integrations.
- **Stack:** Java 8, Spring MVC 5.2.9, Hibernate 3.6.10 (~724 `.hbm.xml`
  mappings), 5 Maven modules (Appcore · EJB business layer with 465 DAOs · GUI
  with ~2,400 screens · RestApi · WEB), jjwt HS512, MapStruct, Jackson/Gson,
  Springfox/Swagger
- **UI:** Swing + JTattoo / FlatLaf / GlazedLists, DJNativeSwing embedded
  browser, launched via JNLP
- **REST layer:** 19 base paths (stok, satis, satinalma, finans, uretim, kalite,
  mdepo, mutabakat, entegrasyon…), DeskIQ CRM API, telemetry & config-export API
  for the on-prem agent, column-level permissions, screen customization
- **Integrations:** Axis 1.4 SOAP clients, TurkKEP e-Fatura / e-İrsaliye /
  e-Defter, GİB e-Defter & e-Beyanname, UBL 2.0, ELogo, Albaraka & QNB bank
  clients, PKCS#11 e-signature, EDI reader, Redis (Jedis), JSch SFTP, JavaMail,
  Selenium / HtmlUnit automation, RXTX serial
- **Reporting:** JasperReports, iText, PDFBox, ICEpdf, POI, JFreeChart,
  Velocity, ZXing / Barbecue
- **Data:** Oracle (primary), PostgreSQL, HSQLDB; JSqlParser
- **DevOps:** Tomcat 9 Docker image (`tomcat:9.0-jdk8-temurin`), compose dev/prod,
  three Jenkinsfiles (main / dev / agent release), Harbor, SonarQube, ~60 vendor
  jars installed via scripts, signed WAR release bundles uploaded to the agent
  control plane with release channels
- **Scale:** ~5,100 Java files

### BilisimERP Agent (erpagent) — On-prem ERP Update & Fleet Monitoring
Outbound-only update and monitoring system for ERP instances at customer sites
(Tomcat WAR on Windows or Docker Compose on Linux, against Oracle). An on-host
agent pulls jobs from a central control plane and runs preflight → snapshot →
stop → deploy → start → health check with automatic rollback, reporting version,
health and consent-gated telemetry. Replaces a manual VPN/RDP process; every
step is explainable (`doctor` / `plan` / reasoned step log).
- **Agent:** Go 1.26 single static cross-compiled binary (Windows service /
  systemd via kardianos/service), cobra CLI, embedded SQLite (modernc), DPAPI-sealed
  secrets, exponential backoff, JSON-Schema validated configs, self-update,
  emergency local page; never connects to the customer's Oracle DB
- **Control plane:** Go, chi router, PostgreSQL 16 (pgx) + Flyway 11 (43
  migrations), Keycloak 26 OIDC (realm per tenant + staff realm, issuer→tenant
  mapping), S3 artifact store (aws-sdk-go-v2 / SeaweedFS), robfig/cron scheduler,
  job leasing, Ed25519 signing, alerts, customer portal API, DeskIQ REST client
- **Contract:** OpenAPI 3 as single source of truth (public, internal, portal
  specs + JSON Schemas) — oapi-codegen (Go server/client), openapi-typescript,
  Spectral linting, `gen-check` CI gate
- **Panel:** React 19.3, TypeScript, Vite 7.3, Mantine 8, TanStack Table /
  Virtual, React Router 7, oidc-client-ts; Vitest + Testing Library + Playwright
- **Quality & CI:** Go workspace + Make (~40 targets), golangci-lint, `-race`
  tests (177 test files), testcontainers-go e2e against real PostgreSQL and the
  real agent binary, chaos/fault-injection runs, Jenkins on Linux + Windows
  runners with nightly chaos job, git pre-commit scope hooks, release channels
  dev → qa → pilot → genel
- **Scale:** ~396 Go files · 110 TS/TSX files · 19 docs (architecture, runbook,
  transparency, TR/EN manuals)

### DeskIQ — Service-Desk Analytics & AI Support Platform
Reporting and support-intelligence platform on top of ManageEngine ServiceDesk
Plus: full + 10-minute delta ticket sync, built-in and custom report builder,
scheduled e-mail reports, and LLM-assisted ticket analysis. Grew into a wider
internal platform: CRM, projects, sales quotes with PDF generation, Jira
integration, AI chat, audit log, roles and users.
- **Stack:** Python 3.11, FastAPI 0.116, Uvicorn, SQLAlchemy 2, Alembic (~137
  migrations), psycopg 3, Pydantic Settings, APScheduler, httpx (paginated,
  retrying SDP V3 client), PyJWT
- **AI:** Self-hosted OpenAI-compatible LLM (Gemma) over httpx with function /
  tool calling and JSON fallback — ticket triage, request/person analysis,
  consultant reply suggestions, quality scoring, AI chat assistant with tools,
  prompt & rule management, feedback loop
- **Frontend:** Jinja2 server-rendered Turkish UI (~176 templates), htmx,
  Bootstrap, Chart.js
- **Data & Storage:** PostgreSQL 17, MongoDB (Jira data), SQLite (dev),
  S3-compatible object storage (SeaweedFS, migrated from MinIO via rclone)
- **Integrations:** ServiceDesk Plus V3, Jira (tasks, availability, daily
  reports), Core ERP REST client + event service, Gmail SMTP (HTML + Excel via
  openpyxl), WeasyPrint PDF quotes; REST API consumed by the ERP agent
- **Security:** Fernet-encrypted credentials, JWT + RBAC, audit log, CVE-pinned deps
- **DevOps:** Non-root Docker image with healthcheck and `alembic upgrade` on
  start, three compose overlays, Harbor publish script (buildx / classic),
  PowerShell native installer + Windows Task Scheduler
- **Testing:** pytest + respx (~70 test files), pyflakes dead-code gate
- **Scale:** ~395 Python files, 29 route modules, ~60 services, ~65 ORM models

### erpLlm — ERP AI Chat Assistant
On-prem Turkish-language assistant answering natural-language questions over ERP
docs and live ERP data; no data leaves the internal network. Shared service
called by Core ERP, ERP Plus, MobilVardiya and MobilDepo.
- **Stack:** Python, FastAPI (`/api/answer`, `/api/v1`), SQLite + CSV Q&A audit
  log, admin panel
- **AI/RAG:** sentence-transformers (multilingual MiniLM-L12, local), FAISS over
  ~7,300 curated Q&A pairs with cached embeddings, Ollama (Llama 3.1 / Gemma) or
  local Claude-compatible wrapper; regex router (`QADetect`) → live ERP data /
  RAG + LLM / free ask; Turkish text normalization
- **Integration:** "ERP Wizard API" gateway exposing whitelisted views as JSON
  behind an API-key header
- **Frontend:** browser chat UI (htmx / Alpine.js / Tabler)

### BilisimERP 4.0 (Spring) — Cloud ERP Backend ("BulutERP")
Modular-monolith cloud ERP REST backend covering sales, purchasing, stock, MES,
mobile API and general definitions.
- **Stack:** Java 8, Spring Boot 2.1.6, 12-module Maven build (core, auth,
  core-lib, dvo, firebase + 7 business modules), 46 REST controllers, Spring
  Data JPA + Hibernate (Oracle dialect, Ehcache L2), Spring JDBC, Actuator, Mail,
  Thymeleaf, Spring Data REST HAL browser
- **Security:** Spring Security OAuth2 (authorization + resource server),
  spring-security-jwt
- **Real-time:** Spring WebSocket hub receiving the MES machine-data stream
- **Data:** Oracle (ojdbc8), Redis (Jedis) cache & pub/sub
- **Integrations:** Firebase Cloud Messaging push (mobile), ERP REST client,
  scheduled jobs, Apache POI Excel import/export, Springfox Swagger
- **Testing / DevOps:** JUnit + REST Assured, Docker (`openjdk:8`) executable jar
- **Scale:** ~369 Java files

### BilisimERP 4.0 UI (akillimobilsaha) — ERP / MES Web SPA
Angular single-page ERP frontend whose core is a real-time MES "Live Machine
Monitor" (downtime logging, operator / machine selection, external setup,
warm-up), plus dashboard, calendar, JWT auth with interceptors and route guards.
- **Stack:** Angular 7.2, TypeScript 3.2, RxJS 6, SCSS, Angular CDK
- **UI:** PrimeNG 7, DevExtreme 19 (Gantt, Diagram), AG-Grid 20, ngx-bootstrap,
  Bootstrap 4, angular-calendar, gridster2 dashboards, Quill, ng-select,
  ngx-toastr, SweetAlert2
- **Real-time:** SockJS + STOMP WebSocket service (live machine data)
- **Auth / i18n:** @auth0/angular-jwt, ngx-translate; Google Calendar API v3
- **In-house packages:** private `@bilisim/common` / `@core/common` npm libs
- **DevOps:** Angular CLI prod build served by Nginx (HTTP/2, gzip, API
  micro-cache, HSTS / CSP headers); Karma / Jasmine + Istanbul, Protractor e2e

### bilisim-mes — Real-time MES Stream Processor
Apache Flink streaming job ingesting CNC/PLC machine signals over MQTT,
evaluating a configurable rule set of machine states (Cycle_Start, Alarm,
Emergency, Run, Motion, Cutting, Pallet_Change…), keeping state in Redis and
pushing results to the ERP backend over WebSocket and REST.
- **Stack:** Java 8, Apache Flink 1.9 (custom SourceFunction / RichSinkFunction /
  FlatMapFunction), Eclipse Paho MQTT, Jedis (pool + pub/sub), Tyrus WebSocket
  client, Apache HttpClient, Gson, SLF4J / Log4j
- **Build:** Maven shaded uber-JAR for Flink cluster submission; externalized
  `config.properties` (broker, Redis, WebSocket, rules)
- **Architecture:** MQTT source → rule flat-map → Redis state/pub-sub → WebSocket
  + HTTP sinks

### MDepo — Mobile Warehouse Management
JBoss Seam mobile warehouse / stock app for handheld devices: warehouse transfer
orders, bulk stock issue and shipment against dispatch plans, work-order stock
reservation, in-browser barcode scanning.
- **Stack:** Java 6, JBoss Seam 2.3, EJB 3.0, JSF 2.0 / Facelets, Hibernate 3 /
  JPA (~40 entities), Hibernate Tools reverse engineering
- **UI:** PrimeFaces 4.0 + PrimeFaces Mobile, RichFaces (legacy), ZXing barcodes
- **Rules / Workflow:** Drools (Seam security), jBPM jPDL
- **Integration:** ERP SOAP client (Axis / JAX-RPC from WSDL); POI / JXL, iText / PDFBox
- **Data:** Oracle 10g (JTA datasource); **Server:** JBoss AS 7.1.1 (EAR + EJB + WAR, Eclipse WTP)
- **DevOps (recent):** Multi-stage Dockerfile (JDK 8 build → OpenJDK 7 + JBoss
  7.1.1 runtime with patched jboss-modules), bash EAR packaging, compose dev/prod
  with healthchecks, Harbor push script
- **Scale:** 107 Java · 30 XHTML; 443 commits (2014 → 2026)

### MVardiya — Mobile Shift Management & Shop-floor Data Collection
Mobile shift-management (vardiya) app for ERP production: setup/work start &
finish on work orders, downtime entry, quality measurements, machine and team
selection, andon calls, label printing, document viewing, live screen, reports,
SSO login.
- **Stack:** Java 6, JBoss Seam 2.3 + Spring 3, EJB 3.0, JSF 2.x, Hibernate 3 /
  JPA (~50 entities), JavaMail, Gson
- **UI:** PrimeFaces 4.0 + Extensions 2.1 + Mobile, RichFaces, CKEditor / CodeMirror
- **Rules / Workflow:** Drools, jBPM
- **Integration:** versioned ERP SOAP clients (Axis / JAX-RPC, 2018–2020), e-mail, label printing
- **Reporting:** JFreeChart, iText, POI, JExcelApi
- **Data:** Oracle 10g; **Server:** JBoss AS 7.1.1 (multi-module EAR)
- **DevOps / Process:** Same Docker + Harbor setup as MDepo; AI-assisted
  (Claude Code) monthly code-review reports in `docs/team-reports`
- **Scale:** 135 Java · 71 XHTML; 1,383 commits (2014 → 2026)

### ISYS (BilisimPM) — Manufacturing Project & Capacity Management
Java EE EAR for production planning and monitoring on top of the ERP: work
orders, capacity planning & scheduler (by value and by shift), work-order Gantt,
machine status, utilization reports, process tracking, free-resource lookup;
integrates with the ERP and the İşakış workflow system and exposes its own SOAP
services.
- **Stack:** Java EE 6 (Java 6), JBoss Seam, EJB 3.1, JSF + PrimeFaces 5.1 +
  Extensions 3.0 (Timeline, Schedule, Gantt, charts, drag-and-drop), Hibernate 3 /
  JPA, Joda-Time, jsoup
- **UI:** DHTMLX Scheduler, custom Gantt, Bootstrap + jQuery, Font Awesome
- **Rules / Workflow:** Drools, jBPM
- **Integration:** erp-ws-client and isakis-ws-client SOAP clients (Axis /
  JAX-RPC); web-servis-ejb JAX-WS endpoints (work orders, capacity, monitoring,
  free resources) with AES-encrypted payloads; iText PDF, POI Excel, e-mail
- **Data:** Oracle 10g; **Server:** JBoss AS 7 (Eclipse WTP EAR, 6 modules)
- **Scale:** 214 Java · 29 XHTML · ~308 JS

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
- **Service desk & support analytics** — SLA / technician performance, CRM,
  AI ticket triage and quality scoring
- **AI-assisted enterprise software** — RAG assistants, LLM tool calling, NL
  data querying, ML risk scoring, AI-assisted code review

---

_Note: `C:\WORKSPACE\erp-condoctor` resolves to `C:\WORKSPACE\test\erp-condoctor`,
which is an empty repository (no commits). Its scope is carried by the
**erpagent** project above. `erp-git-maven` lives inside the `erp-plus`
workspace._
