// ============================================================
// DATA — Edit this file to update your portfolio content.
// Every section of the site reads from the objects below.
// Last full refresh: November 2026
// ============================================================

export type ProjectCategory = 'ai' | 'cybersecurity' | 'software'

export type Project = {
  id: string
  title: string
  subtitle: string
  year?: string
  status: 'completed' | 'in-progress'
  categories: ProjectCategory[]
  icon: string
  description: string
  features: string[]
  stack: string[]
  github: string | null
  demo: string | null
  featured: boolean
}

export const personal = {
  name: 'Saurav Kumar Jaiswal',
  title: 'Software & Security Engineer',
  currentRole: 'Technical Consulting Engineer — Trainee, Cisco CX',
  roles: ['Software Engineer', 'Security Engineer', 'AI / LLM Builder', 'Penetration Tester'],
  bio: 'Computer Science graduate (KIIT, 2026) and Technical Consulting Engineer trainee at Cisco CX. I build software in Python and Java — from an LLM-assisted vulnerability-triage platform to a multi-currency reconciliation system — backed by hands-on penetration testing and CEH v13, eJPTv2 and PT1 certifications.',
  location: 'Bengaluru, Karnataka, India',
  email: 'saurav.jaiswal.mee@gmail.com',
  phone: '+91 9939112334',
  github: 'https://github.com/meesauravjaiswal',
  linkedin: 'https://linkedin.com/in/meesauravjaiswal',
  tryhackme: 'https://tryhackme.com/p/saurav.jaiswal',
  siteUrl: 'https://sauravjaiswal.vercel.app',
  cgpa: '8.56',
  available: true,
  availability: 'Open to full-time roles · Immediate joiner · Open to relocation',
}

export const experiences = [
  {
    id: 'cisco',
    org: 'Cisco — Customer Experience (CX)',
    role: 'Technical Consulting Engineer — Trainee',
    period: '2026 – Present',
    location: 'Bengaluru, Karnataka',
    description: 'Apprenticeship on the Python / GenAI engineering track. Built a multi-currency vendor-invoice reconciliation and payment-monitoring system in Python that imports supplier invoices from CSV/Excel, tracks what is owed and paid across currencies, flags overdue payments, and keeps every total exact. Trained in CCNA 200-301 routing & switching and in LLMs, RAG, prompt engineering and agentic AI.',
    tags: ['Python', 'SQLite', 'pytest', 'CCNA 200-301', 'LLMs', 'RAG', 'Agentic AI'],
    link: null as string | null,
    linkLabel: null as string | null,
  },
  {
    id: 'capgemini',
    org: 'Capgemini — Exceller Edge Fellowship',
    role: 'Fellow, Python stream',
    period: 'Dec 2025 – Feb 2026',
    location: 'Bhubaneswar, Odisha',
    description: 'Hands-on training fellowship across cloud fundamentals (AWS / Azure / GCP), CI/CD with Git, Jenkins and Maven, Oracle SQL, and Python for data work (NumPy, Pandas). Capstone: an end-to-end Power BI analysis of a real dataset.',
    tags: ['Python', 'Oracle SQL', 'CI/CD', 'Jenkins', 'Power BI', 'Cloud', 'Agile'],
    link: 'https://drive.google.com/file/d/1iz635lk_KsxKRh8Ovq89qwspHpJo_vFb/view?usp=sharing',
    linkLabel: 'View certificate',
  },
  {
    id: 'gpcssi',
    org: 'Gurugram Police Cyber Cell — GPCSSI\'25',
    role: 'Cybersecurity Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'Gurugram, Haryana',
    description: 'Built AutoVAPT, an automated vulnerability-assessment framework in Python that drives Nmap, SQLMap and OWASP ZAP across web, API and network targets, maps findings to CVE/CVSS, and produces structured remediation reports. Trained by Cyber Crime Gurugram in digital forensics & incident response, OSINT, and digital-evidence handling.',
    tags: ['Python', 'Nmap', 'SQLMap', 'OWASP ZAP', 'CVE/CVSS', 'OSINT', 'DFIR'],
    link: null as string | null,
    linkLabel: null as string | null,
  },
  {
    id: 'cybervault',
    org: 'CyberVault Club — KIIT University',
    role: 'Cyber Lead',
    period: '2024 – 2025',
    location: 'Bhubaneswar, Odisha',
    description: 'Ran structured workshops on web-application penetration testing, OWASP methodology and manual security testing for club members, and organised CyberXposed — a penetration-testing event with an ACP-rank police officer and a security expert.',
    tags: ['Workshops', 'OWASP', 'Penetration Testing', 'Event Management'],
    link: null as string | null,
    linkLabel: null as string | null,
  },
]

export const projects: Project[] = [
  {
    id: 'exploitaizer',
    title: 'ExploitAIzer',
    subtitle: 'LLM-assisted VAPT Platform',
    year: '2026',
    status: 'in-progress',
    categories: ['ai', 'cybersecurity'],
    icon: '🤖',
    description: 'A full-stack vulnerability-assessment platform built to cut the false positives in raw scanner output. An LLM tool-calling agent reviews each finding, calls tools to confirm it, and reports only genuine issues in plain language.',
    features: [
      'LLM triage agent (Gemini / Groq function calling) that must cite evidence or return insufficient_evidence',
      'Runs Nmap, Nuclei, OWASP ZAP and SQLMap with argument lists only — never a shell',
      'Scope allowlist plus single-use typed consent before any active test',
      'Web dashboard for scope setup, scan runs, findings review and reports',
    ],
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Gemini', 'Groq', 'SQLite'],
    github: 'https://github.com/meesauravjaiswal/ExploitAIzer',
    demo: null,
    featured: true,
  },
  {
    id: 'vendor-invoice',
    title: 'Vendor Invoice Intelligence',
    subtitle: 'Payment Monitoring System',
    year: '2026',
    status: 'completed',
    categories: ['software'],
    icon: '💱',
    description: 'A desktop app, built during the Cisco apprenticeship, that imports supplier invoices from CSV/Excel, tracks amounts owed and paid across multiple currencies, flags overdue payments, and keeps every money total exact.',
    features: [
      'Exact decimal arithmetic across 9 currencies with date-effective exchange rates',
      'Rejects spreadsheet formula cells on import to block CSV/formula injection',
      'Detects duplicate invoices and keeps importing when a single row fails',
      'Covered by a 43-test pytest suite over temporary databases',
    ],
    stack: ['Python', 'SQLite', 'pytest'],
    github: 'https://github.com/meesauravjaiswal/Vendor-Invoice-Intelligence-Payment-Monitoring-System',
    demo: null,
    featured: true,
  },
  {
    id: 'kronox',
    title: 'KronoX',
    subtitle: 'Stock Forecasting App',
    year: '2026',
    status: 'completed',
    categories: ['ai', 'software'],
    icon: '📈',
    description: 'A Streamlit app that forecasts Indian (NSE) and US stock prices with the Kronos-mini foundation model, falling back to a custom-trained gradient-boosting model, with live prices and a backtesting engine.',
    features: [
      'Three-tier prediction chain: Kronos-mini → gradient boosting → linear fallback',
      '22 engineered features including RSI, MACD, Bollinger Bands and ATR',
      'Live prices via yfinance with interactive Plotly charts',
      'Backtesting with Sharpe ratio, max drawdown and win rate',
    ],
    stack: ['Python', 'Streamlit', 'scikit-learn', 'Plotly', 'yfinance'],
    github: 'https://github.com/meesauravjaiswal/KronoX',
    demo: null,
    featured: true,
  },
  {
    id: 'hotel-management',
    title: 'Hotel Management System',
    subtitle: 'Core Java Application',
    status: 'completed',
    categories: ['software'],
    icon: '🏨',
    description: 'A menu-driven console application for room booking, food orders and billing, built to practise object-oriented design in Core Java.',
    features: [
      'Four room categories (60 rooms) with live availability checks',
      'Per-room food orders and itemised bill generation at checkout',
      'Inheritance-based room model and a custom exception for unavailable rooms',
      'Saves and restores all bookings with Java serialization on a background thread',
    ],
    stack: ['Java', 'OOP', 'Serialization', 'Multithreading'],
    github: 'https://github.com/meesauravjaiswal/Hotel-Management',
    demo: null,
    featured: true,
  },
  {
    id: 'subenum',
    title: 'SubEnum',
    subtitle: 'Subdomain Scanner',
    year: '2025',
    status: 'completed',
    categories: ['cybersecurity'],
    icon: '🔍',
    description: 'A beginner-friendly desktop tool for subdomain discovery: pick a domain and a wordlist, and it checks each candidate over HTTP and HTTPS.',
    features: [
      'PyQt6 interface — no terminal needed',
      'Checks every wordlist entry over both HTTP and HTTPS',
      'Scanning runs on a background thread so the window stays responsive',
      'Results stream into the window as they are found',
    ],
    stack: ['Python', 'PyQt6', 'requests'],
    github: 'https://github.com/meesauravjaiswal/SubEnum',
    demo: null,
    featured: false,
  },
  {
    id: 'purple-team',
    title: 'Purple Team Enterprise Simulation',
    subtitle: 'Security Lab',
    year: '2025',
    status: 'completed',
    categories: ['cybersecurity'],
    icon: '🟣',
    description: 'A multi-VM enterprise lab that simulates attacker and defender workflows across Linux and Windows machines.',
    features: [
      'Network scanning and service enumeration with Nmap',
      'Manual security testing against lab services',
      'Detection and traffic analysis with Splunk and Wireshark',
      'Forensic review with Autopsy',
    ],
    stack: ['Kali Linux', 'Splunk', 'Wireshark', 'Autopsy'],
    github: null,
    demo: null,
    featured: false,
  },
  {
    id: 'ad-lab',
    title: 'Active Directory Security Lab',
    subtitle: 'Security Lab',
    year: '2024',
    status: 'completed',
    categories: ['cybersecurity'],
    icon: '🏛️',
    description: 'A domain-based lab with a Windows Domain Controller and multiple users, used to practise and document credential-based attack chains.',
    features: [
      'Kerberoasting and Pass-the-Hash',
      'Golden Ticket persistence',
      'Lateral movement with CrackMapExec',
      'Credential extraction with Mimikatz',
    ],
    stack: ['Windows Server', 'Active Directory', 'Mimikatz', 'CrackMapExec'],
    github: null,
    demo: null,
    featured: false,
  },
]

export const certifications = [
  {
    id: 'ceh',
    title: 'Certified Ethical Hacker (CEH v13)',
    short: 'CEH v13',
    issuer: 'EC-Council',
    issuerShort: 'ECC',
    issued: 'Jun 2026',
    credentialId: 'ECC4625870319',
    skills: ['Ethical Hacking', 'Network Scanning', 'Web App Attacks', 'System Hacking'],
    verifyUrl: 'https://drive.google.com/file/d/1CoHL03Q9Nlg4YmrXEbKOgZ-CMjYrnwbL/view',
    badge: '🛡️',
    type: 'eccouncil' as const,
  },
  {
    id: 'ejptv2',
    title: 'eJPTv2 — Junior Penetration Tester',
    short: 'eJPTv2',
    issuer: 'INE Security',
    issuerShort: 'INE',
    issued: 'Jun 2025',
    credentialId: '145802693',
    skills: ['Assessment Methodologies', 'Host & Network Pentesting', 'Web App Pentesting'],
    verifyUrl: 'https://certs.ine.com/32f2b4e5-2363-4204-9e57-0cdfbcf53c3a#acc.dxeXcCms',
    badge: '🎯',
    type: 'ine' as const,
  },
  {
    id: 'pt1',
    title: 'Junior Penetration Tester (PT1)',
    short: 'PT1',
    issuer: 'TryHackMe',
    issuerShort: 'THM',
    issued: 'Aug 2025',
    credentialId: 'THM-68af43f17eb77279f6015306',
    skills: ['Scored 97%', 'Network Pentesting', 'Web App Pentesting', 'Auditing'],
    verifyUrl: 'https://assets.tryhackme.com/certification-certificate/68af43f17eb77279f6015306.pdf',
    badge: '🔴',
    type: 'thm' as const,
  },
  {
    id: 'icca',
    title: 'INE Certified Cloud Associate (ICCA)',
    short: 'ICCA',
    issuer: 'INE Security',
    issuerShort: 'INE',
    issued: 'Jun 2025',
    credentialId: '145986817',
    skills: ['Cloud Fundamentals', 'AWS IAM', 'Cloud Security'],
    verifyUrl: 'https://certs.ine.com/7d84b53e-28db-40eb-8d3d-a19d69542d1b#acc.s4YWRNL6',
    badge: '☁️',
    type: 'ine' as const,
  },
]

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'C', 'SQL', 'Bash'] },
  { group: 'CS Fundamentals', items: ['Data Structures & Algorithms', 'OOP', 'Operating Systems', 'Computer Networks', 'SDLC', 'Agile'] },
  { group: 'AI / LLM', items: ['LLM Tool-Calling', 'Prompt Engineering', 'Agentic Workflows', 'RAG', 'LangGraph', 'PyTorch', 'n8n'] },
  { group: 'Web & Backend', items: ['FastAPI', 'REST APIs', 'React', 'Next.js', 'Tailwind CSS', 'SQLite', 'Streamlit'] },
  { group: 'Security', items: ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Nuclei', 'SQLMap', 'Metasploit', 'Wireshark', 'Splunk', 'Nessus', 'OWASP Top 10', 'MITRE ATT&CK'] },
  { group: 'Networking (CCNA training)', items: ['Subnetting & VLSM', 'VLANs & Trunking', 'OSPF', 'EIGRP', 'ACLs', 'NAT', 'DHCP'] },
  { group: 'DevOps & Tools', items: ['Git', 'GitHub', 'Docker', 'Nginx', 'Jenkins', 'Maven', 'VirtualBox', 'VMware', 'Kali Linux'] },
  { group: 'Data', items: ['Oracle SQL', 'Pandas', 'NumPy', 'Power BI'] },
]

export const education = [
  {
    institution: 'KIIT University, Bhubaneswar',
    degree: 'B.Tech in Computer Science & Communication Engineering (CS&CE)',
    period: '2022 – 2026',
    location: 'Bhubaneswar, Odisha',
    score: 'CGPA: 8.56 / 10.0',
    icon: '🎓',
  },
  {
    institution: 'The Millennium School, Lucknow',
    degree: 'CBSE — Class X & XII',
    period: '2018 / 2020',
    location: 'Lucknow, Uttar Pradesh',
    score: '10th: 92.33% (2018) · 12th: 88% (2020)',
    icon: '🏫',
  },
]

export const achievements = [
  {
    icon: '🏆',
    title: 'Full-time offer from TCS — HackQuest Season 10',
    description: 'Earned a full-time offer after clearing two proctored CTF rounds and two technical interviews covering client-side trust exploitation, SQL injection, encoding/obfuscation and steganography.',
  },
  {
    icon: '🚩',
    title: 'Industry CTFs — CloudSEK & KPMG',
    description: 'Solved challenges in JWT manipulation, Server-Side Template Injection to RCE, SQL injection and LLM prompt injection.',
  },
  {
    icon: '🥈',
    title: '2nd Position — Microsoft Stark Expo 2023',
    description: 'Placed second at Microsoft Stark Expo 2023 (KIIT Chapter), an innovation showcase among engineering students.',
  },
  {
    icon: '🎤',
    title: 'Organised CyberXposed',
    description: 'Led a university penetration-testing event featuring an ACP-rank police officer and a security expert.',
  },
]
