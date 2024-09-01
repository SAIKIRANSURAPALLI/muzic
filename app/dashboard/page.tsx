"use client";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";
import StreamView from "../component/StreamView";

interface Video {
  id: string;
  type: string;
  url: string;
  extractedId: string;
  title: string;
  smallImg: string;
  bigImg: string;
  active: boolean;
  userId: string;
  upvotes: number;
  haveUpvoted: boolean;
}

const REFRESH_INTERVAL_MS = 10 * 1000;

export default function Component() {
  const [creatorId, setCreatorId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch("/api/user");
        const data = await res.json();
        setCreatorId(data.user.id);
      } catch (e) {
        console.error("Failed to fetch user data", e);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!creatorId) {
    return <div>Creator ID not found.</div>;
  }

  return <StreamView creatorId={creatorId} playVideo={true} />;
}
