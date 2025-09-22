import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Upload, Image, Video, FileText, Trash2, Eye } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Mock data for demonstration - in real app this would come from Supabase
const mockMedia = [
  { id: 1, type: 'image', name: 'hero-banner.jpg', url: '/assets/hero-image.jpg', uploadedAt: '2024-01-15' },
  { id: 2, type: 'video', name: 'brand-story.mp4', url: '#', uploadedAt: '2024-01-14' },
  { id: 3, type: 'image', name: 'collection-preview.jpg', url: '/assets/suiting.jpg', uploadedAt: '2024-01-13' },
];

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [mediaFiles, setMediaFiles] = useState(mockMedia);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check authentication status
  useEffect(() => {
    const adminAuth = localStorage.getItem('adminAuthenticated');
    if (adminAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Demo credentials - in production this would authenticate with Supabase
    if (loginForm.username === 'admin' && loginForm.password === 'huntsman2024') {
      setIsAuthenticated(true);
      localStorage.setItem('adminAuthenticated', 'true');
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuthenticated');
    navigate('/');
  };

  const handleFileUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedFiles || selectedFiles.length === 0) {
      toast({
        title: "No Files Selected",
        description: "Please select files to upload",
        variant: "destructive",
      });
      return;
    }

    // In production, this would upload to Supabase Storage
    const newFiles = Array.from(selectedFiles).map((file, index) => ({
      id: mediaFiles.length + index + 1,
      type: file.type.startsWith('image/') ? 'image' : 'video',
      name: file.name,
      url: URL.createObjectURL(file),
      uploadedAt: new Date().toISOString().split('T')[0],
    }));

    setMediaFiles([...mediaFiles, ...newFiles]);
    setSelectedFiles(null);
    
    toast({
      title: "Upload Successful",
      description: `${selectedFiles.length} file(s) uploaded successfully`,
    });
  };

  const handleDeleteFile = (id: number) => {
    setMediaFiles(mediaFiles.filter(file => file.id !== id));
    toast({
      title: "File Deleted",
      description: "File has been removed from the system",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl text-center">HUNTSMAN Admin</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  required
                />
              </div>
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Sign In
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Demo: admin / huntsman2024
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">HUNTSMAN Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="media" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="media">Media Management</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="media" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  Upload Media
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFileUpload} className="space-y-4">
                  <div>
                    <Label htmlFor="files">Select Files (Images or Videos)</Label>
                    <Input
                      id="files"
                      type="file"
                      multiple
                      accept="image/*,video/*"
                      onChange={(e) => setSelectedFiles(e.target.files)}
                    />
                  </div>
                  <Button type="submit" disabled={!selectedFiles}>
                    Upload Files
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Media Library</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {mediaFiles.map((file) => (
                    <div key={file.id} className="border rounded-lg p-4 space-y-2">
                      <div className="flex items-center gap-2">
                        {file.type === 'image' ? (
                          <Image className="w-4 h-4" />
                        ) : (
                          <Video className="w-4 h-4" />
                        )}
                        <span className="font-medium">{file.name}</span>
                      </div>
                      
                      {file.type === 'image' && (
                        <img 
                          src={file.url} 
                          alt={file.name}
                          className="w-full h-32 object-cover rounded"
                        />
                      )}
                      
                      <div className="text-sm text-muted-foreground">
                        Uploaded: {file.uploadedAt}
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="destructive"
                          onClick={() => handleDeleteFile(file.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Content Management
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Content management features will be implemented here. This includes managing:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  <li>Website banners and hero images</li>
                  <li>Product collections and descriptions</li>
                  <li>Journal articles and blog posts</li>
                  <li>Company information and heritage content</li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>System Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Admin settings and configuration options will be available here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Admin;