import { Chat, LiveKitRoom, useToken } from '@livekit/components-react';
import type { NextPage } from 'next';

const ChatExample: NextPage = () => {
  const params = typeof window !== 'undefined' ? new URLSearchParams(location.search) : null;
  const roomName = params?.get('room') ?? 'test-room';
  const userIdentity = params?.get('user') ?? 'test-identity';

  const token = useToken(process.env.NEXT_PUBLIC_LK_TOKEN_ENDPOINT, roomName, {
    userInfo: {
      identity: userIdentity,
      name: userIdentity,
    },
  });

  return (
    <div style={{ padding: '2rem' }} data-lk-theme="default">
      <LiveKitRoom video={false} token={token} serverUrl={process.env.NEXT_PUBLIC_LK_SERVER_URL}>
        <Chat />
      </LiveKitRoom>
    </div>
  );
};

export default ChatExample;
