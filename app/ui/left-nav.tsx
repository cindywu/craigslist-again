import EventCalendar from "./event-calendar";
export default function LeftNav(): JSX.Element {
  return (
    <div>
      <div>craiglist</div>
      <div>post an ad</div>
      <input className="border-1 border px-1" placeholder="search craigslist" />
      <EventCalendar />
      <Stuff />
      <MoreStuff />
      <Charitable />
      <EvenMoreStuff />
    </div>
  );
}

function Stuff(): JSX.Element {
  return (
    <div className="py-2">
      <div>help, faq, abuse, legal</div>
      <div>avoid scams & fraud</div>
      <div>personal safety tips</div>
    </div>
  );
}

function MoreStuff(): JSX.Element {
  return (
    <div className="py-2">
      <div>about craigslist</div>
      <div>best-of-craigslist</div>
      <div>craigslist is hiring</div>
      <div>what&apos;s new</div>
      <div>system status</div>
    </div>
  );
}

function Charitable(): JSX.Element {
  return (
    <div>
      <div>craigslist charitable</div>
      <div>
        <span>🌎</span>
        <span>🐮</span>
        <span>🐷</span>
        <span>🐔</span>
        <span>🐟</span>
      </div>
    </div>
  );
}

function EvenMoreStuff(): JSX.Element {
  return (
    <div>
      <div>craig newmark philanthropies</div>
    </div>
  );
}
