# Enes Karaoglu — Technical Skills & Tech Stack

_Generated 2026-07-24 from 10 production projects._

Senior full-stack / backend engineer with 15+ years across the enterprise Java
ecosystem — from legacy Java EE (Seam/EJB/JBoss) monoliths to modern Spring Boot 3
/ Java 21 modular monoliths, React 19 SPAs, real-time stream processing, and
AI/LLM-powered ERP tooling. Deep specialization in ERP, MES (Manufacturing
Execution Systems), and shop-floor / warehouse domains.

---

## Core Competencies (Skills Summary)

**Languages**
Java (8 → 21), TypeScript, Python 3.11, Kotlin, SQL/PL-SQL, JavaScript, HTML/SCSS

**Backend Frameworks**
Spring Boot 3.x / 2.x, Spring Modulith, Spring Framework 5, Spring Security &
OAuth2, Spring Data JPA, Spring WebFlux, JBoss Seam 2.x, Jakarta/Java EE (EJB 3,
JSF 2.x, Facelets), Hibernate (3 → 6) / JPA, FastAPI

**Frontend & UI**
React 19, Angular 7, Vite, TypeScript, Tailwind CSS, Zustand, TanStack Query,
React Hook Form + Zod, AG-Grid, PrimeNG / PrimeFaces, DevExtreme, RichFaces,
Thymeleaf, JSF/Facelets, Java Swing (Web Start / JNLP desktop clients)

**AI / LLM / ML**
RAG pipelines, Anthropic Claude API integration, Ollama (Llama 3.1, Gemma),
sentence-transformers, FAISS vector search, PyTorch, NL→JPQL query generation,
LLM-driven risk scoring & narratives

**Databases & Caching**
Oracle, PostgreSQL, Redis (Jedis), SQLite, H2/Derby/HSQLDB, HikariCP,
Hibernate second-level cache (Ehcache)

**Messaging, Streaming & Real-time**
Apache Flink (stream processing), MQTT (Eclipse Paho), WebSocket / STOMP / SockJS,
Redis Pub/Sub

**Integration**
REST APIs, SOAP / JAX-WS / Apache Axis, JWT authentication, e-invoice / e-ledger /
tax integrations (GİB, e-Fatura, e-Defter), Firebase push notifications

**Rules & Workflow**
Drools (business rules), jBPM (process/workflow)

**Reporting & Documents**
JasperReports, Apache POI (Excel), iText / PDFBox (PDF), JFreeChart, ZXing (barcodes)

**Build & Tooling**
Maven (multi-module), npm / Vite, Gradle-style workflows, Eclipse WTP, Lombok,
MapStruct, springdoc-openapi / Swagger

**DevOps & Infrastructure**
Docker (multi-stage builds, BuildKit), Docker Compose, Apache Tomcat 9, JBoss /
WildFly, Nginx, Jenkins CI/CD, Atlassian Bamboo, Harbor private registry,
SonarQube, Bitbucket

---

## Project Portfolio

### erp-plus — Modern ERP Platform (flagship)
Modular-monolith ERP that modernizes a legacy Core ERP behind a REST/React facade,
with RBAC, JWT auth, classification-based security, and AI features.
- **Backend:** Java 21, Spring Boot 3.3, Spring Modulith, Spring Security (JWT),
  Spring Data JPA, WebFlux, AspectJ/AOP, Spring Retry
- **Frontend:** React 19, TypeScript, Vite 7, React Router 7, Zustand, TanStack
  Query, React Hook Form + Zod, Tailwind CSS, AG-Grid, dhtmlx-gantt, Recharts, i18next
- **AI:** Anthropic Claude API (NL→JPQL, EVMS risk scoring & narratives)
- **Data:** Oracle & PostgreSQL, Flyway
- **DevOps:** Multi-stage Docker, Bamboo CI, Harbor registry, Nginx

### erpLlm — ERP AI Chat Assistant
Turkish-language RAG chatbot answering questions over ERP docs and live ERP data.
- **Stack:** Python 3.11, FastAPI, Uvicorn, Jinja2, SQLAlchemy 2 / SQLite
- **AI/RAG:** sentence-transformers (multilingual MiniLM), FAISS, PyTorch,
  Ollama (Llama 3.1 / Gemma), Claude (OpenAI-compatible wrapper)
- **Frontend:** htmx, Alpine.js, Tabler; custom Markdown renderer
- **DevOps:** Multi-stage Docker, Docker Compose, Harbor registry

### Bilisim ERP (erp-git) — Enterprise ERP Monolith
Full Turkish-market ERP with heavy fiscal/e-document integrations, delivered as a
signed Java Web Start desktop client + REST API.
- **Stack:** Java 8, Spring 5.2, Hibernate 3 (~1,448 mappings), JAX-WS SOAP, JWT
- **UI:** Java Swing fat-client via JNLP (code-signed), servlet/JSP web
- **Integrations:** e-Fatura / e-Defter / e-İrsaliye / GİB / bank clients, digital signature (PKCS#11)
- **Reporting:** JasperReports, POI, iText/PDFBox, JFreeChart, ZXing
- **Data:** PostgreSQL (primary), Oracle, Redis, HSQLDB
- **DevOps:** Multi-stage Docker + Compose, Jenkins CI/CD, Harbor, SonarQube, Tomcat 9

### BilisimERP 4.0 (Spring) — Cloud ERP Backend ("BulutERP")
Modular-monolith cloud ERP backend covering sales, stock, purchasing, and MES.
- **Stack:** Java 8, Spring Boot 2.1, Spring Security OAuth2 + JWT, Spring WebSocket,
  Hibernate + Ehcache, 12-module Maven build
- **Frontend:** Thymeleaf + Bootstrap (separate Angular UI implied)
- **Data:** Oracle, HikariCP, Redis (Jedis)
- **Integrations:** Firebase push, JavaMail, Springfox Swagger
- **DevOps:** Docker, Spring Boot Admin, Prometheus/StatsD metrics

### BilisimERP 4.0 UI (akillimobilsaha) — ERP / MES Web SPA
Angular single-page ERP frontend including a real-time MES shop-floor monitoring module.
- **Stack:** Angular 7, TypeScript, RxJS, SCSS
- **UI:** DevExtreme, AG-Grid, PrimeNG, ngx-bootstrap, gridster2 dashboards
- **Real-time:** WebSockets via SockJS + STOMP (live machine data)
- **Auth/i18n:** @auth0/angular-jwt, ngx-translate
- **DevOps:** Nginx-served build (containerized), Karma/Jasmine, Protractor

### bilisim-mes — Real-time MES Stream Processor
Apache Flink job ingesting machine/PLC signals over MQTT, evaluating rules, and
pushing results to a live WebSocket UI.
- **Stack:** Java 8, Apache Flink 1.9 (streaming), Eclipse Paho MQTT, Jedis/Redis,
  Gson, Tyrus WebSocket client
- **Build:** Maven (shaded uber-JAR)
- **Architecture:** MQTT source → rule flat-map → WebSocket sink; Redis pub/sub

### MDepo — Mobile Warehouse Management
JBoss Seam mobile warehouse/inventory app (stock exit, transfers, shipment)
integrated with ERP over SOAP.
- **Stack:** Java (JDK 6), JBoss Seam 2.3, JSF 2, EJB 3, Hibernate 3 / JPA
- **UI:** PrimeFaces 4 + PrimeFaces Mobile, RichFaces
- **Rules:** Drools (security.drl), jBPM
- **Integration:** Apache Axis SOAP ERP client; Jackrabbit JCR
- **Data:** Oracle 10g; **Server:** JBoss AS 7.1 (multi-module EAR)

### MVardiya — Shift Management
Enterprise shift-management (vardiya) web app integrating with ERP over SOAP.
- **Stack:** Java (JDK 6), JBoss Seam 2 + Spring 3, JSF 2.2 (Mojarra), EJB,
  Hibernate 3 / JPA (55 entities)
- **UI:** PrimeFaces 4 + Extensions + Mobile, RichFaces, CKEditor/CodeMirror; SSO logins
- **Rules:** Drools, jBPM
- **Reporting:** JFreeChart, iText, POI, JExcelApi
- **Data:** Oracle; **Server:** JBoss AS 7.1 (multi-module EAR)

### ISYS (BilisimPM) — Manufacturing Project Management
Java EE EAR for shop-floor project management: process tracking, work orders,
capacity/utilization, integrating with ERP and a workflow (İşakış) system.
- **Stack:** Java EE 5/6, JBoss Seam, JSF + PrimeFaces 5.1, EJB 3, Hibernate 3 / JPA (~39 entities)
- **UI:** DHTMLX Scheduler 5, custom Gantt, Bootstrap + jQuery, Font Awesome
- **Rules/Workflow:** Drools, jBPM
- **Integration:** Apache Axis SOAP (ERP + İşakış clients)
- **Data:** Oracle; **Server:** JBoss / WildFly

### erp-docker — ERP Containerization / Infrastructure
Docker packaging of the legacy Core ERP web app + JNLP desktop client, layer-optimized
for fast incremental deploys.
- **Stack:** Docker (BuildKit, multi-stage), Docker Compose, Tomcat 9 / Temurin JDK 8
- **Data:** External Oracle (Hibernate); env-var driven config
- **Delivery:** Harbor private registry, build-and-push automation, JNLP client delivery

---

## Domain Expertise

- **ERP** — sales, stock/inventory, purchasing, accounting, quality, e-document/fiscal compliance
- **MES** — real-time machine monitoring, downtime/OEE tracking, shop-floor screens
- **Warehouse & Logistics** — mobile stock operations, transfers, shipment
- **Manufacturing PM** — work orders, capacity planning, shift management, scheduling
- **AI-assisted enterprise software** — RAG assistants, NL data querying, ML risk scoring
