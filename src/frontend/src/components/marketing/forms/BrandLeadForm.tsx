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
import { budgetRanges, timelines } from '@/lib/formOptions';
import { Loader2 } from 'lucide-react';
import type { BrandForm } from '@/backend';

export function BrandLeadForm() {
  const { submitBrand, isLoading, error, isSuccess } = useLeadSubmission();
  
  const [formData, setFormData] = useState<BrandForm>({
    name: '',
    description: '',
    website: '',
    contactEmail: '',
  });

  const [additionalData, setAdditionalData] = useState({
    contactName: '',
    campaignGoals: '',
    budgetRange: '',
    timeline: '',
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
          newErrors.name = 'Brand name is required';
        } else {
          delete newErrors.name;
        }
        break;
      case 'contactName':
        if (!validateRequired(additionalData.contactName)) {
          newErrors.contactName = 'Contact name is required';
        } else {
          delete newErrors.contactName;
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
      case 'website':
        if (!validateRequired(formData.website)) {
          newErrors.website = 'Website or social link is required';
        } else {
          delete newErrors.website;
        }
        break;
      case 'campaignGoals':
        if (!validateRequired(additionalData.campaignGoals)) {
          newErrors.campaignGoals = 'Campaign goals are required';
        } else {
          delete newErrors.campaignGoals;
        }
        break;
      case 'budgetRange':
        if (!validateRequired(additionalData.budgetRange)) {
          newErrors.budgetRange = 'Budget range is required';
        } else {
          delete newErrors.budgetRange;
        }
        break;
      case 'timeline':
        if (!validateRequired(additionalData.timeline)) {
          newErrors.timeline = 'Timeline is required';
        } else {
          delete newErrors.timeline;
        }
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const fields = ['name', 'contactName', 'contactEmail', 'website', 'campaignGoals', 'budgetRange', 'timeline'];
    fields.forEach(validateField);
    
    const newTouched: Record<string, boolean> = {};
    fields.forEach(field => { newTouched[field] = true; });
    setTouched(newTouched);

    return fields.every(field => !errors[field] && (
      field === 'name' ? validateRequired(formData.name) :
      field === 'contactName' ? validateRequired(additionalData.contactName) :
      field === 'contactEmail' ? validateRequired(formData.contactEmail) && validateEmail(formData.contactEmail) :
      field === 'website' ? validateRequired(formData.website) :
      field === 'campaignGoals' ? validateRequired(additionalData.campaignGoals) :
      field === 'budgetRange' ? validateRequired(additionalData.budgetRange) :
      field === 'timeline' ? validateRequired(additionalData.timeline) :
      true
    ));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Combine all data into description field for backend
    const fullDescription = `
Contact: ${additionalData.contactName}
Campaign Goals: ${additionalData.campaignGoals}
Budget Range: ${additionalData.budgetRange}
Timeline: ${additionalData.timeline}
${additionalData.additionalNotes ? `Additional Notes: ${additionalData.additionalNotes}` : ''}
    `.trim();

    const submissionData: BrandForm = {
      ...formData,
      description: fullDescription,
    };

    const success = await submitBrand(submissionData);
    
    if (success) {
      // Reset form
      setFormData({
        name: '',
        description: '',
        website: '',
        contactEmail: '',
      });
      setAdditionalData({
        contactName: '',
        campaignGoals: '',
        budgetRange: '',
        timeline: '',
        additionalNotes: '',
      });
      setTouched({});
      setErrors({});
    }
  };

  const isFormValid = 
    validateRequired(formData.name) &&
    validateRequired(additionalData.contactName) &&
    validateRequired(formData.contactEmail) &&
    validateEmail(formData.contactEmail) &&
    validateRequired(formData.website) &&
    validateRequired(additionalData.campaignGoals) &&
    validateRequired(additionalData.budgetRange) &&
    validateRequired(additionalData.timeline) &&
    Object.keys(errors).length === 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Brand Application</CardTitle>
        <CardDescription>
          Tell us about your brand and campaign goals. We'll connect you with the perfect creators.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <SubmissionFeedback error={error} isSuccess={isSuccess} type="brand" />
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="brand-name">Brand/Company Name *</Label>
            <Input
              id="brand-name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              onBlur={() => handleBlur('name')}
              placeholder="Your Brand Name"
              disabled={isLoading}
            />
            {touched.name && errors.name && <InlineFieldError message={errors.name} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="contact-name">Contact Name *</Label>
            <Input
              id="contact-name"
              value={additionalData.contactName}
              onChange={(e) => setAdditionalData({ ...additionalData, contactName: e.target.value })}
              onBlur={() => handleBlur('contactName')}
              placeholder="Your Full Name"
              disabled={isLoading}
            />
            {touched.contactName && errors.contactName && <InlineFieldError message={errors.contactName} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand-email">Contact Email *</Label>
            <Input
              id="brand-email"
              type="email"
              value={formData.contactEmail}
              onChange={(e) => setFormData({ ...formData, contactEmail: e.target.value })}
              onBlur={() => handleBlur('contactEmail')}
              placeholder="you@company.com"
              disabled={isLoading}
            />
            {touched.contactEmail && errors.contactEmail && <InlineFieldError message={errors.contactEmail} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="brand-website">Website or Social Link *</Label>
            <Input
              id="brand-website"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              onBlur={() => handleBlur('website')}
              placeholder="https://yourbrand.com"
              disabled={isLoading}
            />
            {touched.website && errors.website && <InlineFieldError message={errors.website} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="campaign-goals">Campaign Goals *</Label>
            <Textarea
              id="campaign-goals"
              value={additionalData.campaignGoals}
              onChange={(e) => setAdditionalData({ ...additionalData, campaignGoals: e.target.value })}
              onBlur={() => handleBlur('campaignGoals')}
              placeholder="Describe what you want to achieve with this campaign..."
              rows={4}
              disabled={isLoading}
            />
            {touched.campaignGoals && errors.campaignGoals && <InlineFieldError message={errors.campaignGoals} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="budget-range">Budget Range *</Label>
            <Select
              value={additionalData.budgetRange}
              onValueChange={(value) => {
                setAdditionalData({ ...additionalData, budgetRange: value });
                setTouched({ ...touched, budgetRange: true });
                validateField('budgetRange');
              }}
              disabled={isLoading}
            >
              <SelectTrigger id="budget-range">
                <SelectValue placeholder="Select your budget range" />
              </SelectTrigger>
              <SelectContent>
                {budgetRanges.map((range) => (
                  <SelectItem key={range} value={range}>
                    {range}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {touched.budgetRange && errors.budgetRange && <InlineFieldError message={errors.budgetRange} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Campaign Timeline *</Label>
            <Select
              value={additionalData.timeline}
              onValueChange={(value) => {
                setAdditionalData({ ...additionalData, timeline: value });
                setTouched({ ...touched, timeline: true });
                validateField('timeline');
              }}
              disabled={isLoading}
            >
              <SelectTrigger id="timeline">
                <SelectValue placeholder="When do you want to launch?" />
              </SelectTrigger>
              <SelectContent>
                {timelines.map((timeline) => (
                  <SelectItem key={timeline} value={timeline}>
                    {timeline}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {touched.timeline && errors.timeline && <InlineFieldError message={errors.timeline} />}
          </div>

          <div className="space-y-2">
            <Label htmlFor="additional-notes">Additional Notes</Label>
            <Textarea
              id="additional-notes"
              value={additionalData.additionalNotes}
              onChange={(e) => setAdditionalData({ ...additionalData, additionalNotes: e.target.value })}
              placeholder="Any other information you'd like to share..."
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
