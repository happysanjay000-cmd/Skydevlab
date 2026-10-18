import { AppDatabase, Project, Website, AppItem, StudyNote, ContactMessage, SiteStats, FounderProfile } from '../types';

import aiChatImg from '../assets/images/project_ai_chat_1791249619964.jpg';
import notesHubImg from '../assets/images/project_notes_hub_1791249639029.jpg';
import cyberToolsImg from '../assets/images/project_cyber_tools_1791249651746.jpg';

const STORAGE_KEY = 'skydev_labs_data_v1';

export const INITIAL_DATA: AppDatabase = {
  stats: {
    projectsCount: '10+',
    websitesCount: '5+',
    appsCount: '3+',
    studentStatus: 'Class 12 PCM Student',
  },
  founder: {
    name: 'Sanjay Raikwar',
    role: 'Founder & Lead Developer',
    title: 'Class 12 PCM Student & AI Web Developer',
    bio: "I'm passionate about technology, AI and web development. I love building useful digital solutions, learning new skills and turning ideas into real projects.",
    email: 'happysanjay000@gmail.com',
    phone: '+91 9329683202',
    location: 'India',
    socials: {
      github: 'https://github.com',
      youtube: 'https://youtube.com',
      instagram: 'https://instagram.com',
      linkedin: 'https://linkedin.com',
      twitter: 'https://x.com',
    },
  },
  projects: [
    {
      id: 'proj-1',
      title: 'AI Chat App',
      category: 'AI',
      description: 'Intelligent multi-model conversational assistant with context caching, voice input, and custom prompt workflows.',
      fullDetails: 'Engineered with modern LLM APIs, featuring real-time token streaming, dark glass interface, code execution preview, and custom conversational memory.',
      image: aiChatImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      tags: ['AI / LLM', 'React', 'TypeScript', 'Tailwind CSS'],
      published: true,
      featured: true,
      date: '2026',
    },
    {
      id: 'proj-2',
      title: 'My Notes Hub',
      category: 'Web',
      description: 'Comprehensive academic knowledge hub providing free structured study notes for Class 10-12 and CS undergraduates.',
      fullDetails: 'Full-featured web portal with instantaneous client-side search, LaTeX mathematical formatting, clean print/PDF export, and offline support.',
      image: notesHubImg,
      demoUrl: '#notes',
      githubUrl: 'https://github.com',
      tags: ['EdTech', 'Full-Stack', 'Search', 'Education'],
      published: true,
      featured: true,
      date: '2026',
    },
    {
      id: 'proj-3',
      title: 'Cyber Security Tools Suite',
      category: 'Security',
      description: 'Network diagnostics, cryptographic hashing analyzer, password strength inspector, and security audit utilities.',
      fullDetails: 'Empowers learners and web administrators to test headers, verify SHA/MD5 digests, inspect SSL status, and learn digital defense best practices.',
      image: cyberToolsImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      tags: ['Cyber Security', 'Cryptography', 'Audit', 'DevTools'],
      published: true,
      featured: true,
      date: '2026',
    },
    {
      id: 'proj-4',
      title: 'Gaming Hub Portal',
      category: 'Web',
      description: 'High-speed browser gaming portal featuring lightweight casual WebGL and Canvas mini-games with local leaderboard saves.',
      fullDetails: 'Optimized 60 FPS performance even on low-end Android mobile devices with zero bloat and smooth touch responsiveness.',
      image: aiChatImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      tags: ['HTML5 Canvas', 'Game Dev', 'Responsive'],
      published: true,
      featured: false,
      date: '2026',
    },
    {
      id: 'proj-5',
      title: 'Automated Code Reviewer AI',
      category: 'AI',
      description: 'Instant syntactic and security vulnerability scanner for JavaScript and Python repositories with automated fix recommendations.',
      fullDetails: 'Parses AST trees and leverages modern AI embeddings to detect memory leaks, unhandled promises, and insecure dependencies.',
      image: cyberToolsImg,
      demoUrl: 'https://github.com',
      githubUrl: 'https://github.com',
      tags: ['AI Agent', 'Code Analysis', 'Security'],
      published: true,
      featured: false,
      date: '2026',
    },
    {
      id: 'proj-6',
      title: 'Smart Task & Study Planner',
      category: 'App',
      description: 'Pomodoro timer and spaced-repetition revision tracker designed specifically for Class 12 board exam and entrance prep.',
      fullDetails: 'Built to help science students manage intense study blocks, physics problem sets, and revision milestones with zero distractions.',
      image: notesHubImg,
      demoUrl: '#apps',
      githubUrl: 'https://github.com',
      tags: ['Productivity', 'PWA', 'Study System'],
      published: true,
      featured: false,
      date: '2026',
    },
  ],
  websites: [
    {
      id: 'web-1',
      title: 'SKYDEV LABS Official Portal',
      description: 'Next-generation tech startup platform featuring dynamic project showcases, public notes directory, and inquiry pipeline.',
      screenshotUrl: notesHubImg,
      liveDemoUrl: '#',
      sourceCodeUrl: 'https://github.com',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Vite'],
      category: 'Startup Portal',
      published: true,
      date: '2026',
    },
    {
      id: 'web-2',
      title: 'TechNova Corporate Agency',
      description: 'Modern high-converting agency website designed with glassmorphism, responsive bento grids, and interactive lead capture.',
      screenshotUrl: aiChatImg,
      liveDemoUrl: 'https://github.com',
      sourceCodeUrl: 'https://github.com',
      technologies: ['React', 'Framer Motion', 'Tailwind'],
      category: 'Agency / Corporate',
      published: true,
      date: '2025',
    },
    {
      id: 'web-3',
      title: 'PCM Formula Matrix Web',
      description: 'Interactive mathematics and physics formula reference engine with quick copy and step-by-step theorem derivations.',
      screenshotUrl: notesHubImg,
      liveDemoUrl: 'https://github.com',
      sourceCodeUrl: 'https://github.com',
      technologies: ['HTML5', 'TypeScript', 'KaTeX'],
      category: 'Education / Reference',
      published: true,
      date: '2025',
    },
    {
      id: 'web-4',
      title: 'CyberDefend Security Hub',
      description: 'Educational cyber security knowledge platform providing interactive threat scenarios and ethical hacking basics.',
      screenshotUrl: cyberToolsImg,
      liveDemoUrl: 'https://github.com',
      sourceCodeUrl: 'https://github.com',
      technologies: ['React', 'Lucide', 'Tailwind CSS'],
      category: 'Cyber Security',
      published: true,
      date: '2025',
    },
    {
      id: 'web-5',
      title: 'Nexus AI Landing Page',
      description: 'Futuristic marketing showcase page for artificial intelligence products with dark tech aesthetic and 60fps animations.',
      screenshotUrl: aiChatImg,
      liveDemoUrl: 'https://github.com',
      sourceCodeUrl: 'https://github.com',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      category: 'Product Landing',
      published: true,
      date: '2025',
    },
  ],
  apps: [
    {
      id: 'app-1',
      title: 'QuickNotes Mobile',
      description: 'Ultra-lightweight offline revision app for students to jot formulas, record audio snippets, and review flashcards on Android.',
      iconUrl: 'https://api.iconify.design/lucide:book-open.svg?color=%2338bdf8',
      platform: 'Android',
      features: [
        'Complete offline-first architecture',
        'LaTeX formula editor and quick-render',
        'Dark mode optimized for OLED screens',
        'One-tap export to PDF and WhatsApp',
      ],
      downloadUrl: '#contact',
      rating: 4.8,
      version: 'v2.1.0',
      published: true,
      date: '2026',
    },
    {
      id: 'app-2',
      title: 'PCM Formula Pro',
      description: 'Fast searchable repository of all formulas for Physics, Chemistry, and Mathematics from Class 11 to Class 12 with unit converters.',
      iconUrl: 'https://api.iconify.design/lucide:atom.svg?color=%2306b6d4',
      platform: 'Cross-Platform',
      features: [
        'Over 1,200 verified formulas with diagram aids',
        'Dimensional analysis calculator',
        'Periodic table with electronic configurations',
        'Exam countdown widget with daily revision goals',
      ],
      downloadUrl: '#contact',
      rating: 4.9,
      version: 'v1.4.2',
      published: true,
      date: '2026',
    },
    {
      id: 'app-3',
      title: 'TermSafe Cyber Guard',
      description: 'Android utility providing Wi-Fi safety analysis, permission risk scoring for installed apps, and secure hash generation.',
      iconUrl: 'https://api.iconify.design/lucide:shield-check.svg?color=%2338bdf8',
      platform: 'Android',
      features: [
        'Inspect suspicious background permissions',
        'Local cryptographic hashing without internet access',
        'Open-source privacy guarantee',
        'Battery-efficient background monitoring',
      ],
      downloadUrl: '#contact',
      rating: 4.7,
      version: 'v1.0.5',
      published: true,
      date: '2026',
    },
  ],
  notes: [
    {
      id: 'note-1',
      title: 'Electrostatics & Electric Potential (Complete Derivations)',
      classCategory: 'Class 12',
      subject: 'Physics',
      summary: 'Comprehensive notes covering Coulomb law, electric field lines, Gauss theorem applications, and capacitance with key exam derivations.',
      content: `## 1. Coulomb's Law & Principle of Superposition
The electrostatic force between two stationary point charges $q_1$ and $q_2$ separated by distance $r$ in vacuum is:
$$F = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q_1 q_2}{r^2}$$
where $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$.

### Key Exam Points:
- Superposition: Total force on any charge equals the vector sum of forces exerted by other charges individually.
- Electric field intensity due to point charge: $E = \\frac{1}{4\\pi\\varepsilon_0} \\cdot \\frac{q}{r^2} \\hat{r}$.

## 2. Gauss's Theorem & Its Applications
Gauss's theorem states that total electric flux $\\Phi_E$ through any closed Gaussian surface equals $\\frac{q_{\\text{enclosed}}}{\\varepsilon_0}$:
$$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{\\text{inside}}}{\\varepsilon_0}$$

### Derivation 1: Electric Field due to Infinitely Long Straight Wire
Consider a cylindrical Gaussian surface of radius $r$ and length $l$ coaxial with linear charge density $\\lambda$:
$$\\oint \\vec{E} \\cdot d\\vec{A} = E \\cdot (2\\pi r l) = \\frac{\\lambda l}{\\varepsilon_0} \\implies E = \\frac{\\lambda}{2\\pi \\varepsilon_0 r}$$

### Derivation 2: Electric Field due to Uniformly Charged Infinite Plane Sheet
For surface charge density $\\sigma$:
$$2 E A = \\frac{\\sigma A}{\\varepsilon_0} \\implies E = \\frac{\\sigma}{2\\varepsilon_0}$$

## 3. Capacitance & Energy Stored
- Parallel plate capacitor capacitance with air dielectric: $C_0 = \\frac{\\varepsilon_0 A}{d}$
- With dielectric slab of constant $K$ filling entire space: $C = \\frac{K \\varepsilon_0 A}{d} = K C_0$
- Energy stored in a charged capacitor: $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V$
- Energy density: $u_E = \\frac{1}{2} \\varepsilon_0 E^2$`,
      readTime: '8 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2026-03',
      tags: ['Physics', 'Class 12', 'Derivations', 'Board Prep'],
    },
    {
      id: 'note-2',
      title: 'Chemical Kinetics & Rate Law Mechanisms',
      classCategory: 'Class 12',
      subject: 'Chemistry',
      summary: 'Detailed revision of order vs molecularity, integrated rate equations for zero and first order reactions, and Arrhenius activation energy.',
      content: `## 1. Rate of Reaction & Rate Law
For a general reaction: $aA + bB \\rightarrow cC + dD$
The experimental rate law is:
$$\\text{Rate} = k [A]^x [B]^y$$
where $(x + y)$ is the overall order of reaction.

### Order vs. Molecularity:
1. **Order**: Experimental value, can be integer, fractional or zero.
2. **Molecularity**: Theoretical count of colliding reactant species in an elementary step; cannot be zero or non-integer.

## 2. Integrated Rate Equations
### Zero-Order Reaction:
$$\\text{Rate} = -\\frac{d[A]}{dt} = k [A]^0 = k$$
Integrated form: $[A] = [A]_0 - k t$
Half-life ($t_{1/2}$):
$$t_{1/2} = \\frac{[A]_0}{2k} \\quad (\\text{depends on initial concentration})$$

### First-Order Reaction:
$$\\text{Rate} = -\\frac{d[A]}{dt} = k [A]$$
Integrated form:
$$k = \\frac{2.303}{t} \\log_{10} \\left( \\frac{[A]_0}{[A]} \\right)$$
Half-life ($t_{1/2}$):
$$t_{1/2} = \\frac{0.693}{k} \\quad (\\text{independent of } [A]_0)$$

## 3. Arrhenius Equation & Activation Energy
Temperature dependence of reaction rate constant $k$:
$$k = A e^{-E_a / RT}$$
Logarithmic form:
$$\\ln k = \\ln A - \\frac{E_a}{RT} \\implies \\log_{10} \\left( \\frac{k_2}{k_1} \\right) = \\frac{E_a}{2.303 R} \\left[ \\frac{T_2 - T_1}{T_1 T_2} \\right]$$`,
      readTime: '6 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2026-02',
      tags: ['Chemistry', 'Class 12', 'Formulas', 'Kinetics'],
    },
    {
      id: 'note-3',
      title: 'Differential Calculus & Maximum/Minimum Theorems',
      classCategory: 'Class 12',
      subject: 'Mathematics',
      summary: 'Mastering continuity, differentiability, chain rule, Rolle theorem, Mean Value Theorem, and second derivative tests with geometric interpretations.',
      content: `## 1. Continuity & Differentiability
A function $f(x)$ is continuous at $x = c$ if:
$$\\lim_{x \\to c^-} f(x) = \\lim_{x \\to c^+} f(x) = f(c)$$

Differentiability implies continuity, but the converse is not always true (e.g. $f(x) = |x|$ at $x = 0$).

## 2. Lagrange's Mean Value Theorem (LMVT)
If $f(x)$ is:
1. Continuous on $[a, b]$
2. Differentiable on $(a, b)$
Then there exists at least one $c \\in (a, b)$ such that:
$$f'(c) = \\frac{f(b) - f(a)}{b - a}$$

## 3. Maxima and Minima (Second Derivative Test)
1. Find critical points by setting $f'(x) = 0$.
2. Compute $f''(x)$:
   - If $f''(c) < 0 \\implies$ Local Maximum at $x = c$.
   - If $f''(c) > 0 \\implies$ Local Minimum at $x = c$.
   - If $f''(c) = 0 \\implies$ Test is inconclusive (use first derivative sign change).`,
      readTime: '7 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2026-01',
      tags: ['Mathematics', 'Class 12', 'Calculus', 'Limits'],
    },
    {
      id: 'note-4',
      title: 'Operating System: Process Scheduling & Deadlock Handling',
      classCategory: 'B.Sc. Computer Science',
      subject: 'Operating System',
      summary: 'CPU scheduling algorithms (FCFS, SJF, Round Robin), process states, Banker algorithm for deadlock avoidance, and semaphore synchronization.',
      content: `## 1. Process States & PCB
A process transitions through:
- **New**: Being created
- **Ready**: In memory waiting for CPU assignment
- **Running**: Instructions currently executing on CPU
- **Waiting / Blocked**: Waiting for I/O completion or event
- **Terminated**: Finished execution

## 2. CPU Scheduling Algorithms
1. **FCFS (First-Come, First-Served)**: Non-preemptive, suffers from Convoy Effect.
2. **SJF (Shortest Job First)**: Optimal for average waiting time; requires burst time prediction.
3. **Round Robin (RR)**: Preemptive scheduling with a defined Time Quantum ($q$). Suitable for time-sharing systems.

## 3. Deadlock Conditions (Coffman Conditions)
All four must hold simultaneously for a deadlock:
1. **Mutual Exclusion**: Non-shareable resource mode.
2. **Hold and Wait**: Process holding resources requests others.
3. **No Preemption**: Resources cannot be forcibly revoked.
4. **Circular Wait**: Closed chain of processes waiting for next.

### Banker's Algorithm:
Used for deadlock avoidance. If requested resources leave the system in a **Safe State** (where a safe sequence of processes exists), the allocation is granted.`,
      readTime: '9 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2025-11',
      tags: ['OS', 'CS Undergrad', 'Concurrency', 'Scheduling'],
    },
    {
      id: 'note-5',
      title: 'Linux CLI & Bash Scripting Essentials for Developers',
      classCategory: 'B.Sc. Computer Science',
      subject: 'Linux',
      summary: 'Fundamental terminal commands, file permissions (chmod/chown), process inspection (ps/htop), grep/awk pipes, and practical shell scripting.',
      content: `## 1. File Hierarchy & Core Commands
- \`pwd\`, \`ls -la\`, \`cd ~\`, \`mkdir -p path/to/dir\`
- File inspection: \`cat\`, \`less\`, \`head -n 20\`, \`tail -f /var/log/syslog\`

## 2. Linux File Permissions Model
Permissions format: \`drwxr-xr-x\`
- First character: \`d\` (directory), \`-\` (file), \`l\` (symlink)
- Octal calculation: Read (4) + Write (2) + Execute (1)
  - \`chmod 755 script.sh\` -> rwxr-xr-x (Owner: read/write/exec, Group & Others: read/exec)
  - \`chmod 600 id_rsa\` -> rw------- (Private key security)

## 3. Pipeline & Filters
Piping stdout of command A into stdin of command B:
\`\`\`bash
# Find active node processes and sort by memory:
ps aux | grep node | sort -nrk 4 | head -n 10

# Count unique IP addresses in web access log:
cat access.log | awk '{print $1}' | sort | uniq -c | sort -nr
\`\`\`

## 4. Useful Bash Script Skeleton
\`\`\`bash
#!/usr/bin/env bash
set -euo pipefail

echo "Executing deployment check for SKYDEV LABS..."
CURRENT_DATE=$(date "+%Y-%m-%d %H:%M:%S")
echo "System Timestamp: $CURRENT_DATE"
\`\`\``,
      readTime: '7 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2025-10',
      tags: ['Linux', 'Bash', 'DevOps', 'CLI'],
    },
    {
      id: 'note-6',
      title: 'Cyber Security: Web Application Defense & OWASP Top 10',
      classCategory: 'B.Sc. Computer Science',
      subject: 'Cyber Security',
      summary: 'Practical overview of SQL Injection, Cross-Site Scripting (XSS), CSRF tokens, HTTPS/TLS handshake, and JWT authentication security.',
      content: `## 1. OWASP Top 10 Vulnerabilities
1. **Broken Access Control**: Users acting outside their intended permissions.
2. **Cryptographic Failures**: Using weak hashing (e.g. raw MD5/SHA1 for passwords instead of bcrypt/argon2).
3. **Injection (SQLi / Command Injection)**: Untrusted data sent to an interpreter without parameterized queries.
4. **Insecure Design & Security Misconfiguration**: Default credentials, unnecessary open ports, verbose error stack traces in production.

## 2. Preventing SQL Injection
\`\`\`javascript
// ❌ INSECURE: String concatenation
const query = \`SELECT * FROM users WHERE email = '\${userInput}'\`;

// ✅ SECURE: Parameterized statement / Prepared query
const query = 'SELECT * FROM users WHERE email = ?';
db.execute(query, [userInput]);
\`\`\`

## 3. Cross-Site Scripting (XSS)
- **Stored XSS**: Malicious script saved permanently in DB.
- **Reflected XSS**: Script embedded in URL query parameters.
- **DOM XSS**: Unsafe DOM manipulation (\`innerHTML\` with unescaped input).

### Mitigation:
- Contextual HTML entity encoding
- Strict Content Security Policy (\`Content-Security-Policy\` header)
- Secure, HttpOnly, SameSite cookies for session tokens.`,
      readTime: '10 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2025-09',
      tags: ['Security', 'OWASP', 'Web Defense', 'Ethical Hacking'],
    },
    {
      id: 'note-7',
      title: 'Newtonian Mechanics & Laws of Motion',
      classCategory: 'Class 11',
      subject: 'Physics',
      summary: 'In-depth notes on Newton three laws, free body diagrams (FBD), impulse-momentum theorem, and circular motion dynamics.',
      content: `## 1. Newton's Three Laws of Motion
1. **First Law (Inertia)**: An object remains at rest or uniform motion unless acted upon by a net external force.
2. **Second Law (Momentum)**: Net external force is directly proportional to rate of change of linear momentum:
$$\\vec{F} = \\frac{d\\vec{p}}{dt} = m \\vec{a} \\quad (\\text{for constant mass } m)$$
3. **Third Law (Action-Reaction)**: Forces always occur in matched pairs acting on different bodies: $\\vec{F}_{AB} = -\\vec{F}_{BA}$.

## 2. Friction
- Static Friction: $f_s \\le \\mu_s N$ (self-adjusting force)
- Kinetic Friction: $f_k = \\mu_k N$ (where $\\mu_k < \\mu_s$)

## 3. Circular Motion Dynamics
For a body moving along a circular path of radius $R$ at speed $v$:
- Centripetal acceleration: $a_c = \\frac{v^2}{R} = \\omega^2 R$
- Maximum safe speed on banked curve with friction:
$$v_{\\max} = \\sqrt{R g \\left( \\frac{\\mu_s + \\tan\\theta}{1 - \\mu_s \\tan\\theta} \\right)}$$`,
      readTime: '6 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2025-08',
      tags: ['Physics', 'Class 11', 'Mechanics', 'FBD'],
    },
    {
      id: 'note-8',
      title: 'Quadratic Equations & Arithmetic Progressions',
      classCategory: 'Class 10',
      subject: 'Mathematics',
      summary: 'Discriminant nature of roots, quadratic formula derivations, AP nth term formula, sum of n terms, and real-world word problem modeling.',
      content: `## 1. Quadratic Equation Standard Form
$$a x^2 + b x + c = 0 \\quad (a \\neq 0)$$
Roots by Quadratic Formula:
$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$

### Nature of Roots via Discriminant ($D = b^2 - 4ac$):
- $D > 0$: Two distinct real roots
- $D = 0$: Two equal real roots ($x = -b / 2a$)
- $D < 0$: No real roots (complex conjugate roots)

## 2. Arithmetic Progression (AP)
Let first term be $a$ and common difference be $d$:
- $n$-th term: $a_n = a + (n - 1) d$
- Sum of first $n$ terms:
$$S_n = \\frac{n}{2} [2a + (n - 1) d] = \\frac{n}{2} (a + l)$$
where $l = a_n$ is the last term.`,
      readTime: '5 min read',
      downloadPdfAvailable: true,
      published: true,
      date: '2025-07',
      tags: ['Class 10', 'Mathematics', 'Quadratic', 'Board Exam'],
    },
  ],
  messages: [
    {
      id: 'msg-1',
      name: 'Dr. Ramesh Sharma',
      email: 'ramesh.sharma@example.com',
      projectType: 'Educational Website',
      message: 'Hello Sanjay, impressed by your notes platform! We want to develop an interactive study tool for our regional coaching institute.',
      date: '2026-03-28',
      read: false,
    },
    {
      id: 'msg-2',
      name: 'Aditya Patel',
      email: 'aditya.startup@example.com',
      projectType: 'AI Solution',
      message: 'Hi Sanjay, loved your AI Chat project. Are you available for a freelance contract to build a customer support AI assistant for our website?',
      date: '2026-03-24',
      read: true,
    },
  ],
};

class DataStoreService {
  private data: AppDatabase;

  constructor() {
    this.data = this.loadData();
  }

  private loadData(): AppDatabase {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        return {
          ...INITIAL_DATA,
          ...parsed,
          stats: { ...INITIAL_DATA.stats, ...(parsed.stats || {}) },
          founder: {
            ...INITIAL_DATA.founder,
            ...(parsed.founder || {}),
            phone: parsed.founder?.phone || INITIAL_DATA.founder.phone,
          },
          projects: parsed.projects?.length ? parsed.projects : INITIAL_DATA.projects,
          websites: parsed.websites?.length ? parsed.websites : INITIAL_DATA.websites,
          apps: parsed.apps?.length ? parsed.apps : INITIAL_DATA.apps,
          notes: parsed.notes?.length ? parsed.notes : INITIAL_DATA.notes,
        };
      }
    } catch (e) {
      console.warn('Failed to parse stored SKYDEV LABS data, using defaults', e);
    }
    return INITIAL_DATA;
  }

  private persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.data));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
  }

  public getData(): AppDatabase {
    return this.data;
  }

  // Projects CRUD
  public getProjects(includeUnpublished = false): Project[] {
    return includeUnpublished ? this.data.projects : this.data.projects.filter(p => p.published);
  }

  public saveProject(project: Project) {
    const idx = this.data.projects.findIndex(p => p.id === project.id);
    if (idx >= 0) {
      this.data.projects[idx] = project;
    } else {
      this.data.projects.unshift(project);
    }
    this.persist();
  }

  public deleteProject(id: string) {
    this.data.projects = this.data.projects.filter(p => p.id !== id);
    this.persist();
  }

  public togglePublishProject(id: string) {
    const proj = this.data.projects.find(p => p.id === id);
    if (proj) {
      proj.published = !proj.published;
      this.persist();
    }
  }

  // Websites CRUD
  public getWebsites(includeUnpublished = false): Website[] {
    return includeUnpublished ? this.data.websites : this.data.websites.filter(w => w.published);
  }

  public saveWebsite(website: Website) {
    const idx = this.data.websites.findIndex(w => w.id === website.id);
    if (idx >= 0) {
      this.data.websites[idx] = website;
    } else {
      this.data.websites.unshift(website);
    }
    this.persist();
  }

  public deleteWebsite(id: string) {
    this.data.websites = this.data.websites.filter(w => w.id !== id);
    this.persist();
  }

  public togglePublishWebsite(id: string) {
    const site = this.data.websites.find(w => w.id === id);
    if (site) {
      site.published = !site.published;
      this.persist();
    }
  }

  // Apps CRUD
  public getApps(includeUnpublished = false): AppItem[] {
    return includeUnpublished ? this.data.apps : this.data.apps.filter(a => a.published);
  }

  public saveApp(app: AppItem) {
    const idx = this.data.apps.findIndex(a => a.id === app.id);
    if (idx >= 0) {
      this.data.apps[idx] = app;
    } else {
      this.data.apps.unshift(app);
    }
    this.persist();
  }

  public deleteApp(id: string) {
    this.data.apps = this.data.apps.filter(a => a.id !== id);
    this.persist();
  }

  public togglePublishApp(id: string) {
    const app = this.data.apps.find(a => a.id === id);
    if (app) {
      app.published = !app.published;
      this.persist();
    }
  }

  // Notes CRUD
  public getNotes(includeUnpublished = false): StudyNote[] {
    return includeUnpublished ? this.data.notes : this.data.notes.filter(n => n.published);
  }

  public saveNote(note: StudyNote) {
    const idx = this.data.notes.findIndex(n => n.id === note.id);
    if (idx >= 0) {
      this.data.notes[idx] = note;
    } else {
      this.data.notes.unshift(note);
    }
    this.persist();
  }

  public deleteNote(id: string) {
    this.data.notes = this.data.notes.filter(n => n.id !== id);
    this.persist();
  }

  public togglePublishNote(id: string) {
    const note = this.data.notes.find(n => n.id === id);
    if (note) {
      note.published = !note.published;
      this.persist();
    }
  }

  // Stats & Founder
  public updateStats(stats: Partial<SiteStats>) {
    this.data.stats = { ...this.data.stats, ...stats };
    this.persist();
  }

  public updateFounder(founder: Partial<FounderProfile>) {
    this.data.founder = { ...this.data.founder, ...founder };
    this.persist();
  }

  // Messages
  public getMessages(): ContactMessage[] {
    return this.data.messages || [];
  }

  public addMessage(msg: Omit<ContactMessage, 'id' | 'date' | 'read'>) {
    const newMsg: ContactMessage = {
      ...msg,
      id: 'msg-' + Date.now(),
      date: new Date().toISOString().split('T')[0],
      read: false,
    };
    if (!this.data.messages) this.data.messages = [];
    this.data.messages.unshift(newMsg);
    this.persist();
    return newMsg;
  }

  public markMessageRead(id: string) {
    const m = this.data.messages.find(msg => msg.id === id);
    if (m) {
      m.read = true;
      this.persist();
    }
  }

  public deleteMessage(id: string) {
    this.data.messages = this.data.messages.filter(msg => msg.id !== id);
    this.persist();
  }

  // Database Import/Export/Reset
  public exportDataJSON(): string {
    return JSON.stringify(this.data, null, 2);
  }

  public importDataJSON(jsonStr: string): boolean {
    try {
      const parsed = JSON.parse(jsonStr);
      if (parsed && typeof parsed === 'object') {
        this.data = {
          ...INITIAL_DATA,
          ...parsed,
        };
        this.persist();
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON import', e);
    }
    return false;
  }

  public resetToDefaults() {
    this.data = JSON.parse(JSON.stringify(INITIAL_DATA));
    this.persist();
  }
}

export const dataStore = new DataStoreService();
