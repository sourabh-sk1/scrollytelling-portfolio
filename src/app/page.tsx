import ScrollyCanvas from "@/components/ScrollyCanvas";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black">
      {/* 
        The canvas animation has 192 frames.
        This handles the first 500vh of the page.
      */}
      <ScrollyCanvas frameCount={192} />

      {/* 
        The glassmorphism projects grid will naturally appear
        after the 500vh canvas section.
      */}
      <Projects />

      {/* 
        Resume section containing experience, education, and skills.
      */}
      <Resume />

      {/* 
        Footer with contact links
      */}
      <footer className="w-full border-t border-white/5 bg-[#050505] py-16 px-8 flex flex-col items-center justify-center gap-8">
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="https://www.linkedin.com/in/sourabh-kumar-a3922a295/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/[0.08] hover:text-white transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-400 group-hover:text-blue-300 transition-colors"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="font-light tracking-wide">LinkedIn</span>
          </a>

          <a 
            href="https://github.com/sourabh-sk1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/[0.08] hover:text-white transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white/60 group-hover:text-white transition-colors"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
            </svg>
            <span className="font-light tracking-wide">GitHub</span>
          </a>

          <a 
            href="mailto:2005sourabhkumar@gmail.com" 
            className="flex items-center gap-3 px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-white/80 hover:bg-white/[0.08] hover:text-white transition-all duration-300 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-emerald-400 group-hover:text-emerald-300 transition-colors"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="font-light tracking-wide">Email</span>
          </a>
        </div>
        <p className="text-white/30 text-xs font-light tracking-widest uppercase">
          © {new Date().getFullYear()} Sourabh Kumar
        </p>
      </footer>
    </main>
  );
}
