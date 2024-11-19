import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

interface YoutubeProps {
  videoId: string;
}

const Youtube = ({ videoId }: YoutubeProps) => {
  const [videoReady, setVideoReady] = useState(false);
  const [isReadyForRender, setIsReadyForRender] = useState(false);

  function onReady() {
    setIsReadyForRender(true);
    setVideoReady(true);
  }

  return (
    <View>
      <YoutubePlayer
        height={200}
        videoId={videoId}
        onReady={() => onReady()}
        webViewStyle={{
          opacity: 0.99,
          display: isReadyForRender ? "flex" : "none",
        }}
        webViewProps={{
          androidLayerType: isReadyForRender ? "hardware" : "software",
        }}
      />
      {!videoReady && <ActivityIndicator color="red" />}
    </View>
  );
};

export default Youtube;
