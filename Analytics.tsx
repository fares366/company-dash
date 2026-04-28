import { CheckCircle, XCircle } from 'lucide-react';
import styles from './analytics.module.css';
import utils from './utils.module.css';

type Status = 'pending' | 'accepted' | 'rejected';

const statCards = [
  { label: 'Profile Views',   value: '28',  sub: '+7 this week',            color: 'var(--teal)'   },
  { label: 'Avg Match Score', value: '74%', sub: 'Across all applications', color: 'var(--purple)' },
  { label: 'Response Rate',   value: '50%', sub: 'Recruiters responding',   color: 'var(--green)'  },
  { label: 'Applications',    value: '4',   sub: '1 accepted',              color: 'var(--amber)'  },
];

const topSkills = [
  { skill: 'Docker',     pct: 85, have: false },
  { skill: 'React',      pct: 78, have: true  },
  { skill: 'TypeScript', pct: 72, have: true  },
  { skill: 'GraphQL',    pct: 61, have: false },
  { skill: 'Python',     pct: 55, have: true  },
];

const history: { id: number; title: string; company: string; date: string; status: Status; score: number }[] = [
  { id: 1, title: 'Front-End Developer Intern', company: 'Sonatrach',     date: '12 Jul 2025', status: 'pending',  score: 87 },
  { id: 2, title: 'ML Engineer Intern',         company: 'Nextralis',     date: '5 Jul 2025',  status: 'accepted', score: 91 },
  { id: 3, title: 'Full-Stack Intern',          company: 'Cevital Group', date: '28 Jun 2025', status: 'rejected', score: 65 },
  { id: 4, title: 'DevOps Intern',              company: 'NCA Rouiba',    date: '20 Jun 2025', status: 'pending',  score: 72 },
];

const statusCls: Record<Status, string> = {
  pending:  utils.tagYellow,
  accepted: utils.tagGreen,
  rejected: utils.tagRed,
};

export default function Analytics() {
  return (
    <div className={`${utils.pageWrap} ${utils.anim}`}>
      <div className={utils.pageHeader}>
        <div>
          <h1 className={utils.pageTitle}>Profile Analytics</h1>
          <p className={utils.pageSub}>Understand your performance and visibility</p>
        </div>
      </div>

      <div className={`${utils.grid4} ${styles.statGrid}`}>
        {statCards.map((s, i) => (
          <div key={i} className={`${utils.card} ${styles.statCard}`}
            style={{ borderColor: s.color + '30', animationDelay: `${i * 0.06}s` }}>
            <div className={styles.statCardLabel}>{s.label}</div>
            <div className={styles.statCardValue} style={{ color: s.color }}>{s.value}</div>
            <div className={styles.statCardSub}>{s.sub}</div>
          </div>
        ))}
      </div>

      <div className={styles.bottomGrid}>
        <div className={utils.card}>
          <h3 className={styles.sectionTitle}>Top In-Demand Skills</h3>
          <p className={styles.sectionSub}>Most requested in your target domains</p>
          {topSkills.map((s, i) => (
            <div key={i} className={styles.skillRow}>
              <div className={styles.skillMeta}>
                <span className={styles.skillName}>
                  {s.have
                    ? <CheckCircle size={13} color="var(--green)" />
                    : <XCircle size={13} color="var(--red)" />
                  }
                  {s.skill}
                </span>
                <span className={styles.skillPct}>{s.pct}% of offers</span>
              </div>
              <div className={utils.progressBar}>
                <div className={utils.progressFill} style={{
                  width: `${s.pct}%`,
                  background: s.have ? undefined : 'linear-gradient(90deg,var(--red),#c2410c)',
                  animationDelay: `${i * 0.08}s`,
                }} />
              </div>
            </div>
          ))}
        </div>

        <div className={utils.card}>
          <h3 className={styles.sectionTitle}>Application History</h3>
          <p className={styles.sectionSub}>Match score with AI compatibility</p>
          {history.map(a => (
            <div key={a.id} className={styles.historyItem}>
              <span className={`${utils.tag} ${statusCls[a.status]}`}>
                {a.status.charAt(0).toUpperCase() + a.status.slice(1)}
              </span>
              <div className={styles.historyInfo}>
                <div className={styles.historyTitle}>{a.title}</div>
                <div className={styles.historyMeta}>{a.company} · {a.date}</div>
              </div>
              <div className={styles.historyScore}>{a.score}%</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
