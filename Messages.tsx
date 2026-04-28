import { useState } from 'react';
import { Search as SearchIcon, Send, Paperclip, Circle } from 'lucide-react';
import styles from './message.module.css';
import utils from './utils.module.css';

const conversations = [
  { id: 1, company: 'Djezzy',    emoji: '📡', last: "We'd love to schedule a call…",     time: '3h', unread: 2 },
  { id: 2, company: 'Sonatrach', emoji: '🏭', last: 'Thank you for applying!',            time: '1d', unread: 0 },
  { id: 3, company: 'Ooredoo',   emoji: '📱', last: 'Could you share your portfolio?',    time: '2d', unread: 0 },
];

const msgs = [
  { from: 'them', text: 'Hello Amira! Thank you for applying for the Data Science Internship.',         time: '10:30 AM' },
  { from: 'me',   text: "Thank you! I'm very excited about this opportunity at Djezzy.",                time: '10:45 AM' },
  { from: 'them', text: "We reviewed your profile and were impressed. We'd love to schedule a call.",   time: '11:00 AM' },
  { from: 'me',   text: "Absolutely! I'm available any day next week between 10am and 5pm.",            time: '11:15 AM' },
  { from: 'them', text: "Perfect. Could you confirm Tuesday at 2pm? We'll send a video link.",          time: '11:20 AM' },
];

export default function Messages() {
  const [active, setActive] = useState(conversations[0]);

  return (
    <div className={`${utils.pageWrap} ${utils.anim}`}>
      <div className={utils.pageHeader}>
        <div>
          <h1 className={utils.pageTitle}>Messages</h1>
          <p className={utils.pageSub}>Direct communication with recruiters</p>
        </div>
      </div>

      <div className={`${utils.card} ${styles.layout}`}>
        <div className={styles.convList}>
          <div className={styles.convSearch}>
            <div className={utils.searchWrap}>
              <span className={utils.searchIcon}><SearchIcon size={14} /></span>
              <input className={utils.searchInput} placeholder="Search conversations…" />
            </div>
          </div>
          <div className={styles.convItems}>
            {conversations.map(c => (
              <div
                key={c.id}
                className={`${styles.convItem} ${active.id === c.id ? styles.convItemActive : ''}`}
                onClick={() => setActive(c)}
              >
                <div className={styles.convAvatar}>
                  <span>{c.emoji}</span>
                  {c.unread > 0 && <span className={styles.convUnread}>{c.unread}</span>}
                </div>
                <div className={styles.convInfo}>
                  <div className={styles.convTop}>
                    <span className={styles.convName}>{c.company}</span>
                    <span className={styles.convTime}>{c.time}</span>
                  </div>
                  <p className={styles.convLast}>{c.last}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.chatPanel}>
          <div className={styles.chatHeader}>
            <div className={styles.convAvatar}><span>{active.emoji}</span></div>
            <div>
              <div className={styles.chatName}>{active.company}</div>
              <div className={styles.chatOnline}>
                <Circle size={8} fill="var(--green)" /> Online
              </div>
            </div>
          </div>

          <div className={styles.chatMessages}>
            {msgs.map((m, i) => (
              <div key={i} className={`${styles.msgRow} ${m.from === 'me' ? styles.msgRowSent : styles.msgRowRecv}`}>
                <div className={`${styles.bubble} ${m.from === 'me' ? styles.bubbleSent : styles.bubbleRecv}`}>
                  {m.text}
                </div>
                <div className={styles.msgTime}>{m.time}</div>
              </div>
            ))}
          </div>

          <div className={styles.chatInputRow}>
            <button className={`${utils.btn} ${utils.btnGhost} ${utils.btnSm}`}><Paperclip size={15} /></button>
            <input className={utils.formInput} placeholder="Type a message…" style={{ flex: 1 }} />
            <button className={`${utils.btn} ${utils.btnPrimary} ${utils.btnSm}`}><Send size={14} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}
