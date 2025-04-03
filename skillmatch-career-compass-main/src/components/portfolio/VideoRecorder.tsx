
import { useState, useRef } from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Video, Play, Square, Save, Upload, Trash } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const VideoRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [videoBlob, setVideoBlob] = useState<Blob | null>(null);
  const [videoURL, setVideoURL] = useState<string | null>(null);
  const [uploadedVideo, setUploadedVideo] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<BlobPart[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunksRef.current.push(e.data);
        }
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: 'video/webm' });
        const url = URL.createObjectURL(blob);
        
        setVideoBlob(blob);
        setVideoURL(url);
        
        if (videoRef.current) {
          videoRef.current.srcObject = null;
          videoRef.current.src = url;
        }
        
        // Clear reference to stream and recording chunks
        streamRef.current?.getTracks().forEach(track => track.stop());
        chunksRef.current = [];
      };
      
      mediaRecorder.start();
      setRecording(true);
      
    } catch (error) {
      console.error('Error accessing media devices:', error);
      toast({
        title: "Camera Access Error",
        description: "Unable to access your camera. Please check permissions.",
        variant: "destructive"
      });
    }
  };
  
  const stopRecording = () => {
    if (mediaRecorderRef.current && recording) {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  };
  
  const saveVideo = () => {
    if (videoBlob) {
      const a = document.createElement('a');
      a.href = videoURL || '';
      a.download = 'portfolio-introduction.webm';
      a.click();
      
      toast({
        title: "Video Saved",
        description: "Your video introduction has been downloaded.",
      });
    }
  };
  
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedVideo(url);
      
      // Reset recorded video
      setVideoBlob(null);
      setVideoURL(null);
      
      toast({
        title: "Video Uploaded",
        description: "Your video file has been uploaded successfully.",
      });
    }
  };
  
  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };
  
  const resetVideo = () => {
    if (videoURL) {
      URL.revokeObjectURL(videoURL);
    }
    if (uploadedVideo) {
      URL.revokeObjectURL(uploadedVideo);
    }
    
    setVideoBlob(null);
    setVideoURL(null);
    setUploadedVideo(null);
    
    toast({
      title: "Video Removed",
      description: "Your video has been removed.",
    });
  };
  
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Video className="h-5 w-5" /> Video Introduction
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center border">
          {!videoURL && !uploadedVideo ? (
            <video 
              ref={videoRef} 
              autoPlay 
              muted 
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <video 
              ref={videoURL ? videoRef : undefined}
              src={uploadedVideo || undefined}
              controls
              className="w-full h-full"
            />
          )}
        </div>
        
        <p className="text-sm text-gray-600">
          Record a short video introduction (1-2 minutes) talking about yourself, your skills, and your career goals. 
          This will make your portfolio more engaging and personal.
        </p>
        
        <input 
          type="file" 
          ref={fileInputRef} 
          accept="video/*" 
          className="hidden" 
          onChange={handleFileUpload} 
        />
      </CardContent>
      
      <CardFooter className="flex flex-wrap gap-3 justify-between">
        <div className="flex space-x-2">
          {!recording && !videoURL && !uploadedVideo && (
            <Button onClick={startRecording} className="flex items-center gap-2">
              <Play className="h-4 w-4" /> Record Video
            </Button>
          )}
          
          {recording && (
            <Button 
              variant="destructive" 
              onClick={stopRecording}
              className="flex items-center gap-2"
            >
              <Square className="h-4 w-4" /> Stop Recording
            </Button>
          )}
          
          {!recording && !videoURL && !uploadedVideo && (
            <Button variant="outline" onClick={triggerFileUpload} className="flex items-center gap-2">
              <Upload className="h-4 w-4" /> Upload Video
            </Button>
          )}
        </div>
        
        <div className="flex space-x-2">
          {(videoURL || uploadedVideo) && (
            <>
              <Button 
                variant="destructive" 
                onClick={resetVideo}
                className="flex items-center gap-2"
              >
                <Trash className="h-4 w-4" /> Remove Video
              </Button>
              
              {videoURL && (
                <Button onClick={saveVideo} className="flex items-center gap-2">
                  <Save className="h-4 w-4" /> Save Video
                </Button>
              )}
            </>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default VideoRecorder;
