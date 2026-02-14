import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLeadSubmission } from '@/hooks/useLeadSubmission';
import { SubmissionFeedback } from '../SubmissionFeedback';
import { InlineFieldError } from '../InlineFieldError';
import { validateEmail, validateRequired } from '@/lib/validation';
import { platforms, audienceSizes } from '@/lib/formOptions';
import { Loader2 } from 'lucide-react';
import type { CreatorForm } from '@/backend';

export function CreatorLeadForm() {
  const { submitCreator, isLoading, error, isSuccess } = useLeadSubmission();
  
  const [formData, setFormData] = useState<CreatorForm>({
    name: '',
    bio: '',
    portfolio: '',
    contactEmail: '',
  });

  const [additionalData, setAdditionalData] = useState({
    primaryPlatform: '',
    handle: '',
    niche: '',
    audienceSize: '',
    location: '',
    additionalNotes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleBlur = (field: string) => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };

  const validateField = (field: string) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'name':
        if (!validateRequired(formData.name)) {
          newErrors.name = 'Creator name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'contactEmail':
        if (!validateRequired(formData.contactEmail)) {
          newErrors.contactEmail = 'Email is required';
        } else if (!validateEmail(formData.contactEmail)) {
          newErrors.contactEmail = 'Please enter a valid email address';
        } else {
          delete newErrors.contactEmail;
        }
        break;
      case 'primaryPlatform':
        if (!validateRequired(additionalData.primaryPlatform)) {
          newErrors.primaryPlatform = 'Primary platform is required';
        } else {
          delete newErrors.primaryPlatform;
        }
        break;
      case 'handle':
        if (!validateRequired(additionalData.handle)) {
          newErrors.handle = 'Profile link or handle is required';
        } else {
          delete newErrors.handle;
        }
        break;
      case 'niche':
        if (!validateRequired(additionalData.niche)) {
          newErrors.niche = 'Niche/category is required';
        } else {
          delete newErrors.niche;
        }
        break;
      case 'audienceSize':
        if (!validateRequired(additionalData.audienceSize)) {
          newErrors.audienceSize = 'Audience size is required';
        } else {
          delete newErrors.audienceSize;
        }
        break;
      case 'location':
        if (!validateRequired(additionalData.location)) {
          newErrors.location = 'Location is required';
        } else {
          delete newErrors.location;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const fields = ['name', 'contactEmail', 'primaryPlatform', 'handle', 'niche', 'audienceSize', 'location'];
    fields.forEach(validateField);
    
    const newTouched: Record<string, boolean> = {};
    fields.forEach(field => { newTouched[field] = true; });
    setTouched(newTouched);

    return fields.every(field => !errors[field] && (
      field === 'name' ? validateRequired(formData.name) :
      field === 'contactEmail' ? validateRequired(formData.contactEmail) && validateEmail(formData.contactEmail) :
      field === 'primaryPlatform' ? validateRequired(additionalData.primaryPlatform) :
      field === 'handle' ? validateRequired(additionalData.handle) :
      field === 'niche' ? validateRequired(additionalData.niche) :
      field === 'audienceSize' ? validateRequired(additionalData.audienceSize) :
      field === 'location' ? validateRequired(additionalData.location) :
      true
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Combine all data into bio and portfolio fields for backend
    const fullBio = `
Platform: ${additionalData.primaryPlatform}
Niche: ${additionalData.niche}
Audience Size: ${additionalData.audienceSize}
Location: ${additionalData.location}
${additionalData.additionalNotes ? `Additional Notes: ${additionalData.additionalNotes}` : ''}
    `.trim();

    const submissionData: CreatorForm = {
      ...formData,
      bio: fullBio,
      portfolio: additionalData.handle,
    };

    const success = await submitCreator(submissionData);
    
    if (success) {
      // Reset form
      setFormData({
        name: '',
        bio: '',
        portfolio: '',
        contactEmail: '',
      });
      setAdditionalData({
        primaryPlatform: '',
        handle: '',
        niche: '',
        audienceSize: '',
        location: '',
        additionalNotes: '',
      });
      setTouched({});
      setErrors({});
    }
  };

  const isFormValid = 
    validateRequired(formData.name) &&
    validateRequired(formData.contactEmail) &&
    validateEmail(formData.contactEmail) &&
    validateRequired(additionalData.primaryPlatform) &&
    validateRequired(additionalData.handle) &&
    validateRequired(additionalData.niche) &&
    validateRequired(additionalData.audienceSize) &&
    validateRequired(additionalData.location) &&
    Object.keys(errors).length === 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Creator Application</CardTitle>
        <CardDescription>
          Share your profile and let us connect you with exclusive brand partnerships.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SubmissionFeedback error={error} isSuccess={isSuccess} type="creator" />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="creator-name">Creator Name *</Label>
            <Input
              id="creator-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onBlur={() => handleBlur('name')}
              placeholder="Your Name or Brand"
              disabled={isLoading}
            />
            {touched.name && errors.name && <InlineFieldError message={errors.name} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="creator-email">Contact Email *</Label>
            <Input
              id="creator-email"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              onBlur={() => handleBlur('contactEmail')}
              placeholder="you@example.com"
              disabled={isLoading}
            />
            {touched.contactEmail && errors.contactEmail && <InlineFieldError message={errors.contactEmail} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="primary-platform">Primary Platform *</Label>
            <Select
              value={additionalData.primaryPlatform}
              onValueChange={(value) => {
                setAdditionalData({ ...additionalData, primaryPlatform: value });
                setTouched({ ...touched, primaryPlatform: true });
                validateField('primaryPlatform');
              }}
              disabled={isLoading}
            >
              <SelectTrigger id="primary-platform">
                <SelectValue placeholder="Select your main platform" />
              </SelectTrigger>
              <SelectContent>
                {platforms.map((platform) => (
                  <SelectItem key={platform} value={platform}>
                    {platform}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {touched.primaryPlatform && errors.primaryPlatform && <InlineFieldError message={errors.primaryPlatform} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="handle">Profile Link or Handle *</Label>
            <Input
              id="handle"
              value={additionalData.handle}
              onChange={(e) => setAdditionalData({ ...additionalData, handle: e.target.value })}
              onBlur={() => handleBlur('handle')}
              placeholder="@yourhandle or profile URL"
              disabled={isLoading}
            />
            {touched.handle && errors.handle && <InlineFieldError message={errors.handle} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="niche">Niche/Category *</Label>
            <Input
              id="niche"
              value={additionalData.niche}
              onChange={(e) => setAdditionalData({ ...additionalData, niche: e.target.value })}
              onBlur={() => handleBlur('niche')}
              placeholder="e.g., Fashion, Tech, Lifestyle, Gaming"
              disabled={isLoading}
            />
            {touched.niche && errors.niche && <InlineFieldError message={errors.niche} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="audience-size">Audience Size *</Label>
            <Select
              value={additionalData.audienceSize}
              onValueChange={(value) => {
                setAdditionalData({ ...additionalData, audienceSize: value });
                setTouched({ ...touched, audienceSize: true });
                validateField('audienceSize');
              }}
              disabled={isLoading}
            >
              <SelectTrigger id="audience-size">
                <SelectValue placeholder="Select your audience size" />
              </SelectTrigger>
              <SelectContent>
                {audienceSizes.map((size) => (
                  <SelectItem key={size} value={size}>
                    {size}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {touched.audienceSize && errors.audienceSize && <InlineFieldError message={errors.audienceSize} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              value={additionalData.location}
              onChange={(e) => setAdditionalData({ ...additionalData, location: e.target.value })}
              onBlur={() => handleBlur('location')}
              placeholder="City, Country"
              disabled={isLoading}
            />
            {touched.location && errors.location && <InlineFieldError message={errors.location} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="creator-notes">Additional Notes</Label>
            <Textarea
              id="creator-notes"
              value={additionalData.additionalNotes}
              onChange={(e) => setAdditionalData({ ...additionalData, additionalNotes: e.target.value })}
              placeholder="Tell us more about your content style, past collaborations, or anything else..."
              rows={3}
              disabled={isLoading}
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isLoading || !isFormValid}>
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            Submit Application
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
