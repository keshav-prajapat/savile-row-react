import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SizeGuide = () => {
  const mensSuits = [
    { size: "XS", chest: "34-36", waist: "28-30", hips: "34-36" },
    { size: "S", chest: "36-38", waist: "30-32", hips: "36-38" },
    { size: "M", chest: "38-40", waist: "32-34", hips: "38-40" },
    { size: "L", chest: "40-42", waist: "34-36", hips: "40-42" },
    { size: "XL", chest: "42-44", waist: "36-38", hips: "42-44" },
    { size: "XXL", chest: "44-46", waist: "38-40", hips: "44-46" },
    { size: "XXXL", chest: "46-48", waist: "40-42", hips: "46-48" }
  ];

  const mensShirts = [
    { size: "14", neck: "14", chest: "34-36", sleeve: "32-33" },
    { size: "14.5", neck: "14.5", chest: "36-37", sleeve: "32-33" },
    { size: "15", neck: "15", chest: "37-38", sleeve: "33-34" },
    { size: "15.5", neck: "15.5", chest: "38-39", sleeve: "33-34" },
    { size: "16", neck: "16", chest: "39-40", sleeve: "34-35" },
    { size: "16.5", neck: "16.5", chest: "40-41", sleeve: "34-35" },
    { size: "17", neck: "17", chest: "41-42", sleeve: "35-36" },
    { size: "17.5", neck: "17.5", chest: "42-43", sleeve: "35-36" },
    { size: "18", neck: "18", chest: "43-44", sleeve: "36-37" }
  ];

  const womensSizes = [
    { size: "XS", ukSize: "6", usSize: "2", chest: "32-34", waist: "24-26", hips: "34-36" },
    { size: "S", ukSize: "8-10", usSize: "4-6", chest: "34-36", waist: "26-28", hips: "36-38" },
    { size: "M", ukSize: "12-14", usSize: "8-10", chest: "36-38", waist: "28-30", hips: "38-40" },
    { size: "L", ukSize: "16-18", usSize: "12-14", chest: "38-40", waist: "30-32", hips: "40-42" },
    { size: "XL", ukSize: "20-22", usSize: "16-18", chest: "40-42", waist: "32-34", hips: "42-44" }
  ];

  const childrensSizes = [
    { age: "2-3 years", height: "92-98", chest: "52-54", waist: "50-52" },
    { age: "3-4 years", height: "98-104", chest: "54-56", waist: "51-53" },
    { age: "4-5 years", height: "104-110", chest: "56-58", waist: "52-54" },
    { age: "5-6 years", height: "110-116", chest: "58-60", waist: "53-55" },
    { age: "6-7 years", height: "116-122", chest: "60-62", waist: "54-56" },
    { age: "7-8 years", height: "122-128", chest: "62-64", waist: "55-57" },
    { age: "8-9 years", height: "128-134", chest: "64-66", waist: "56-58" },
    { age: "9-10 years", height: "134-140", chest: "66-68", waist: "57-59" },
    { age: "10-11 years", height: "140-146", chest: "68-70", waist: "58-60" },
    { age: "11-12 years", height: "146-152", chest: "70-72", waist: "59-61" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-serif mb-4">Size Guide</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Find your perfect fit with our comprehensive sizing charts
              </p>
            </div>

            <Tabs defaultValue="mens-suits" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="mens-suits">Men's Suits</TabsTrigger>
                <TabsTrigger value="mens-shirts">Men's Shirts</TabsTrigger>
                <TabsTrigger value="womens">Women's</TabsTrigger>
                <TabsTrigger value="childrens">Children's</TabsTrigger>
              </TabsList>

              <TabsContent value="mens-suits" className="mt-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif mb-4">Men's Suits & Jackets</h2>
                    <p className="text-muted-foreground mb-6">
                      All measurements are in inches. For the most accurate fit, we recommend professional measurement.
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border px-4 py-3 text-left font-serif">Size</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Chest</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Waist</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mensSuits.map((size, index) => (
                          <tr key={index} className="hover:bg-muted/30">
                            <td className="border border-border px-4 py-3 font-semibold">{size.size}</td>
                            <td className="border border-border px-4 py-3">{size.chest}"</td>
                            <td className="border border-border px-4 py-3">{size.waist}"</td>
                            <td className="border border-border px-4 py-3">{size.hips}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="mens-shirts" className="mt-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif mb-4">Men's Shirts</h2>
                    <p className="text-muted-foreground mb-6">
                      Shirt sizes are based on neck measurement and sleeve length. All measurements in inches.
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border px-4 py-3 text-left font-serif">Size</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Neck</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Chest</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Sleeve</th>
                        </tr>
                      </thead>
                      <tbody>
                        {mensShirts.map((size, index) => (
                          <tr key={index} className="hover:bg-muted/30">
                            <td className="border border-border px-4 py-3 font-semibold">{size.size}</td>
                            <td className="border border-border px-4 py-3">{size.neck}"</td>
                            <td className="border border-border px-4 py-3">{size.chest}"</td>
                            <td className="border border-border px-4 py-3">{size.sleeve}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="womens" className="mt-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif mb-4">Women's Sizes</h2>
                    <p className="text-muted-foreground mb-6">
                      Women's sizing includes UK and US size equivalents. All measurements in inches.
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border px-4 py-3 text-left font-serif">Size</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">UK Size</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">US Size</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Chest</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Waist</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Hips</th>
                        </tr>
                      </thead>
                      <tbody>
                        {womensSizes.map((size, index) => (
                          <tr key={index} className="hover:bg-muted/30">
                            <td className="border border-border px-4 py-3 font-semibold">{size.size}</td>
                            <td className="border border-border px-4 py-3">{size.ukSize}</td>
                            <td className="border border-border px-4 py-3">{size.usSize}</td>
                            <td className="border border-border px-4 py-3">{size.chest}"</td>
                            <td className="border border-border px-4 py-3">{size.waist}"</td>
                            <td className="border border-border px-4 py-3">{size.hips}"</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="childrens" className="mt-8">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-serif mb-4">Children's Sizes</h2>
                    <p className="text-muted-foreground mb-6">
                      Children's sizes are based on age and height. All measurements in centimeters.
                    </p>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border px-4 py-3 text-left font-serif">Age</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Height (cm)</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Chest (cm)</th>
                          <th className="border border-border px-4 py-3 text-left font-serif">Waist (cm)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {childrensSizes.map((size, index) => (
                          <tr key={index} className="hover:bg-muted/30">
                            <td className="border border-border px-4 py-3 font-semibold">{size.age}</td>
                            <td className="border border-border px-4 py-3">{size.height}</td>
                            <td className="border border-border px-4 py-3">{size.chest}</td>
                            <td className="border border-border px-4 py-3">{size.waist}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mt-16 bg-muted/30 p-8 rounded-lg">
              <h2 className="text-2xl font-serif mb-6 text-center">How to Measure</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-serif text-lg mb-4">For Men</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Chest:</strong> Measure around the fullest part of your chest</li>
                    <li><strong>Waist:</strong> Measure around your natural waistline</li>
                    <li><strong>Neck:</strong> Measure around the base of your neck</li>
                    <li><strong>Sleeve:</strong> Measure from shoulder point to wrist</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-serif text-lg mb-4">For Women</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Bust:</strong> Measure around the fullest part of your bust</li>
                    <li><strong>Waist:</strong> Measure around your natural waistline</li>
                    <li><strong>Hips:</strong> Measure around the fullest part of your hips</li>
                    <li><strong>Inseam:</strong> Measure from crotch to ankle</li>
                  </ul>
                </div>
              </div>
              <p className="text-center text-muted-foreground mt-6">
                For the most accurate measurements, we recommend professional fitting at one of our locations.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SizeGuide;