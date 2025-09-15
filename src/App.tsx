import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Suiting from "./pages/Suiting";
import Jackets from "./pages/Jackets";
import Outerwear from "./pages/Outerwear";
import Knitwear from "./pages/Knitwear";
import Bespoke from "./pages/Bespoke";
import Journal from "./pages/Journal";
import Locations from "./pages/Locations";
import FAQs from "./pages/FAQs";
import BookAppointment from "./pages/BookAppointment";
import SizeGuide from "./pages/SizeGuide";
import Shipping from "./pages/Shipping";
import CareInstructions from "./pages/CareInstructions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/suiting" element={<Suiting />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/outerwear" element={<Outerwear />} />
          <Route path="/knitwear" element={<Knitwear />} />
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/care-instructions" element={<CareInstructions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
