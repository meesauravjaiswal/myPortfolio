// ============================================================
// DATA — Edit these files to update your portfolio content
// No code changes needed. Just update the objects below.
// ============================================================

export const personal = {
  name: 'Saurav Kumar Jaiswal',
  title: 'Cybersecurity Engineer',
  roles: ['Penetration Tester', 'VAPT Specialist', 'Security Engineer', 'Security Automation', 'Ethical Hacker'],
  bio: 'Final-year B.Tech CS&CE student at KIIT Bhubaneswar, specializing in cybersecurity, penetration testing, and security automation. Certified eJPTv2, PT1 & ICCA — with hands-on experience in VAPT, threat analysis, and building security tooling.',
  location: 'Bhagalpur, Bihar, India',
  email: 'saurav.jaiswal.meee@gmail.com',
  phone: '+91 9939112334',
  github: 'https://github.com/meesauravjaiswal',
  linkedin: 'https://linkedin.com/in/meesauravjaiswal',
  tryhackme: 'https://tryhackme.com/p/saurav.jaiswal',
  cgpa: '8.56',
  available: true,
}

export const experiences = [
  {
    id: 'gpcssi',
    org: 'Gurugram Police — GPCSSI\'25',
    role: 'Cybersecurity Intern',
    period: 'Jun 2025 – Jul 2025',
    location: 'Gurugram, Haryana',
    description: 'Developed AutoVAPT, an automated VAPT framework using Python, Nmap, SQLMap, and OWASP ZAP to perform comprehensive web, network, and database vulnerability assessments. Implemented CVE mapping and structured report generation to support risk-based security assessment and remediation prioritization.',
    tags: ['Python', 'Nmap', 'SQLMap', 'OWASP ZAP', 'VAPT', 'CVE Mapping', 'Security Automation'],
    type: 'internship' as const,
  },
  {
    id: 'cybervault',
    org: 'CyberVault Club — KIIT University',
    role: 'Cyber Lead',
    period: '2024 – 2025',
    location: 'Bhubaneswar, Odisha',
    description: 'Led the university cybersecurity club, conducting structured workshops and mentoring sessions on cybersecurity fundamentals, VAPT methodologies, and ethical hacking. Organized CyberXposed — a high-profile cybersecurity event featuring sessions by an ACP-rank police officer and certified cyber expert.',
    tags: ['Security Leadership', 'Workshop Facilitation', 'VAPT Training', 'Ethical Hacking', 'Event Management'],
    type: 'leadership' as const,
  },
]

export const projects = [
  {
    id: 'autovat',
    title: 'AutoVAPT',
    subtitle: 'Security Automation Framework',
    year: '2025',
    status: 'completed' as const,
    category: 'cybersecurity' as const,
    icon: '🛡️',
    description: 'An automated Vulnerability Assessment and Penetration Testing framework that integrates multiple industry-standard security tools to streamline the entire assessment pipeline — from initial reconnaissance through to structured risk reporting.',
    features: [
      'Integrates Nmap, SQLMap & OWASP ZAP for full-spectrum coverage',
      'Automated CVE mapping with CVSS-based risk prioritization',
      'Structured PDF/JSON report generation for stakeholders',
      'Modular architecture supporting extension with additional tools',
    ],
    stack: ['Python', 'Nmap', 'SQLMap', 'OWASP ZAP', 'CVE Mapping'],
    github: 'https://github.com/meesauravjaiswal',
    demo: null,
    featured: true,
  },
  {
    id: 'subenum',
    title: 'SubEnum',
    subtitle: 'Reconnaissance Utility',
    year: '2024',
    status: 'completed' as const,
    category: 'cybersecurity' as const,
    icon: '🔍',
    description: 'A high-performance Python-based subdomain enumeration tool built for attack surface mapping. Designed with concurrent probing for rapid discovery of exposed assets and active services.',
    features: [
      'Concurrent DNS and HTTP probing for maximum speed',
      'Custom wordlist support for targeted enumeration campaigns',
      'Identifies active subdomains and exposed services',
      'Structured output for seamless integration with downstream tools',
    ],
    stack: ['Python', 'DNS', 'HTTP Probing', 'Concurrency', 'Recon'],
    github: 'https://github.com/meesauravjaiswal',
    demo: null,
    featured: true,
  },
  // ➕ ADD NEW PROJECTS HERE — same shape as above
]

export const certifications = [
  {
    id: 'ejptv2',
    title: 'Junior Penetration Tester (eJPTv2)',
    issuer: 'INE eLearnSecurity',
    issued: 'Jun 2025',
    credentialId: '145802693',
    skills: ['Assessment Methodologies', 'Web App Pentesting', 'Network Security', '+6 skills'],
    verifyUrl: 'https://certs.ine.com/32f2b4e5-2363-4204-9e57-0cdfbcf53c3a',
    badge: '🎯',
    type: 'ine' as const,
  },
  {
    id: 'pt1',
    title: 'Penetration Tester Level 1 (PT1)',
    issuer: 'TryHackMe',
    issued: 'Aug 2025',
    credentialId: 'THM-68af43f17eb77279f6015306',
    skills: ['Penetration Testing', 'VAPT', 'Web App Security', '+8 skills'],
    verifyUrl: 'https://assets.tryhackme.com/certification-certificate/68af43f17eb77279f6015306.pdf',
    badge: '🔴',
    type: 'thm' as const,
  },
  {
    id: 'icca',
    title: 'INE Certified Cloud Associate (ICCA)',
    issuer: 'INE',
    issued: 'Jun 2025',
    credentialId: '145986817',
    skills: ['AWS IAM', 'IaaS', 'Cloud Security'],
    verifyUrl: 'https://certs.ine.com/7d84b53e-28db-40eb-8d3d-a19d69542d1b',
    badge: '☁️',
    type: 'ine' as const,
  },
  // ➕ ADD NEW CERTIFICATIONS HERE
]

export const skills = [
  { group: 'Languages', items: ['Python', 'C', 'SQL', 'Bash'] },
  { group: 'Security Tools', items: ['Nmap', 'Burp Suite', 'Metasploit', 'OWASP ZAP', 'SQLMap', 'Wireshark', 'Splunk', 'Autopsy'] },
  { group: 'Security Concepts', items: ['VAPT', 'Active Directory Security', 'MITRE ATT&CK', 'Network Security', 'Firewall Config', 'Threat Analysis'] },
  { group: 'Networking', items: ['TCP/IP', 'DNS', 'DHCP', 'OSI Model', 'Subnetting'] },
  { group: 'Data & Analytics', items: ['MySQL', 'Oracle SQL', 'Advanced SQL', 'Power BI', 'Excel'] },
  { group: 'OS & Dev Tools', items: ['Kali Linux', 'Windows Server', 'Git', 'GitHub', 'VS Code', 'Cursor'] },
]

export const education = [
  {
    institution: 'KIIT University, Bhubaneswar',
    degree: 'B.Tech in Computer Science & Communication Engineering (CS&CE)',
    period: 'September 2022 – July 2026',
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
    icon: '🥈',
    title: '2nd Position — Microsoft Stark Expo 2023',
    description: 'Secured 2nd place at Microsoft Stark Expo 2023 (KIIT Chapter) — a competitive hackathon and innovation showcase among top engineering students.',
  },
  {
    icon: '🎤',
    title: 'Organized CyberXposed',
    description: 'Led organization of a high-profile university cybersecurity event featuring sessions by an ACP-rank police officer and a certified cyber expert.',
  },
  // ➕ ADD NEW ACHIEVEMENTS HERE
]
