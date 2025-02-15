import { RemoteParticipant, Track } from 'livekit-client';
import * as React from 'react';
import { useTracks } from '../hooks';
import { AudioTrack } from './participant/AudioTrack';
import { TrackLoop } from './TrackLoop';

/**
 * The RoomAudioRenderer component is a drop-in solution for adding audio to your LiveKit app.
 * It takes care of handling remote participants’ audio tracks and makes sure that microphones and screen share are audible.
 *
 * @example
 * ```tsx
 * <LiveKitRoom>
 *   <RoomAudioRenderer />
 * </LiveKitRoom>
 * ```
 */
export const RoomAudioRenderer = () => {
  const trackBundles = useTracks([Track.Source.Microphone, Track.Source.ScreenShareAudio]);
  return (
    <div style={{ display: 'none' }}>
      <TrackLoop
        trackBundles={trackBundles.filter(({ participant }) => {
          return participant instanceof RemoteParticipant;
        })}
      >
        {/* TODO: How to handle screen share audio? Currently it is rendered as microphone source.         */}
        <AudioTrack source={Track.Source.Microphone} />
      </TrackLoop>
    </div>
  );
};
