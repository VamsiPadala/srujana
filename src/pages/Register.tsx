import { useState } from "react";
import Footer from "@/components/Footer";
import { toast } from "@/hooks/use-toast";
import { CheckCircle } from "lucide-react";

const departments = [
  "Computer Science",
  "Electronics",
  "Mechanical",
  "Civil",
  "Electrical",
  "Information Technology",
  "Other",
];

const eventOptions = [
  "Working Model Exhibition",
  "Paper Presentation",
  "Poster Presentation",
  "Hackathon",
];

const GOOGLE_FORM_POST =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMXGjju5BKZ3-bzlLf_U7_HxiZP1ivoS-GwOA6lpGN8IBE8g/formResponse";

const GOOGLE_FORM_UPLOAD =
  "https://docs.google.com/forms/d/e/1FAIpQLSfMXGjju5BKZ3-bzlLf_U7_HxiZP1ivoS-GwOA6lpGN8IBE8g/viewform";

export default function Register() {
  const [submitted, setSubmitted] = useState(false);
  const [participationType, setParticipationType] = useState("Individual");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const data = new FormData();

    data.append("entry.2092238618", form.fullName.value);
    data.append("entry.1556369182", form.email.value);
    data.append("entry.479301265", form.mobile.value);
    data.append("entry.590819230", form.college.value);
    data.append("entry.1098641086", form.department.value);
    data.append("entry.1470652870", form.event.value);
    data.append("entry.1133713234", participationType);

    data.append("entry.153337580", participationType === "Team" ? "Yes" : "No");
    data.append("entry.457548361", form.teamName?.value || "");
    data.append("entry.1034903973", participationType === "Team" ? "2" : "1");

    await fetch(GOOGLE_FORM_POST, {
      method: "POST",
      body: data,
      mode: "no-cors",
    });

    setLoading(false);
    setSubmitted(true);

    toast({
      title: "Basic Registration Done",
      description: "Now upload your payment screenshot.",
    });

    // Redirect to Google Form upload page
    window.location.href = GOOGLE_FORM_UPLOAD;
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="glass-card p-10 text-center">
          <CheckCircle size={40} className="mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-bold">Redirecting to Payment Upload…</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-xl mx-auto">

          <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">

            <input name="fullName" required placeholder="Full Name" className="input" />

            <input name="email" type="email" required placeholder="Email" className="input" />

            <input name="mobile" pattern="[0-9]{10}" required placeholder="Mobile" className="input" />

            <input name="college" required placeholder="College Name" className="input" />

            <select name="department" required className="input">
              <option value="">Department</option>
              {departments.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <select name="event" required className="input">
              <option value="">Event</option>
              {eventOptions.map((e) => (
                <option key={e}>{e}</option>
              ))}
            </select>

            <div className="flex gap-3">
              {["Individual", "Team"].map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setParticipationType(t)}
                  className={`flex-1 border p-2 rounded ${
                    participationType === t ? "bg-primary text-white" : ""
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {participationType === "Team" && (
              <input name="teamName" placeholder="Team Name" className="input" />
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-primary text-white rounded"
            >
              {loading ? "Submitting…" : "Submit & Upload Payment"}
            </button>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}