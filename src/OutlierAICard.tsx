import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const OutlierAICard = () => (
  <Card className="relative">
    {/* SVG at top right, visible, does not affect layout */}
    <CardHeader>
      <div className="flex flex-col items-center w-full">
        <CardTitle className="ubuntu-font mb-1" style={{ color: '#55575b' }}>Outlier AI</CardTitle>
        <CardDescription className="whitespace-normal leading-normal text-base text-left mb-2">
          Evaluate JavaScript-related datasets to train machine learning models for code understanding and analysis. My role includes annotating code snippets, identifying patterns, and creating training scenarios that help improve model performance.
        </CardDescription>
                <img
          src="/favicon-32x32.svg"
                  alt="Outlier AI Logo"
          className="w-8 h-8 -mb-10 cursor-pointer"
                  style={{ filter: 'grayscale(1)', transform: 'scale(0.8)' }}
                />
      </div>
    </CardHeader>
    <CardContent>
      {/* You can add more content here if needed */}
    </CardContent>
  </Card>
);

export default OutlierAICard; 