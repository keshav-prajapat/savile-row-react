import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ReadyToWear from "./pages/ReadyToWear";
import Company from "./pages/Company";
import Suiting from "./pages/Suiting";
import Jackets from "./pages/Jackets";
import Outerwear from "./pages/Outerwear";
import Knitwear from "./pages/Knitwear";
import Bespoke from "./pages/Bespoke";
import Journal from "./pages/Journal";
import Locations from "./pages/Locations";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Admin from "./pages/Admin";
import BookAppointment from "./pages/BookAppointment";
import SizeGuide from "./pages/SizeGuide";
import Shipping from "./pages/Shipping";
import CareInstructions from "./pages/CareInstructions";
import SuitsCollection from "./pages/SuitsCollection";
import AutumnWinter from "./pages/AutumnWinter";
import JacketsCollection from "./pages/JacketsCollection";
import EveningwearCollection from "./pages/EveningwearCollection";
import OuterwearCollection from "./pages/OuterwearCollection";
import TiesCollection from "./pages/TiesCollection";
import BespokeWomens from "./pages/BespokeWomens";
import WorldOfHuntsman from "./pages/WorldOfHuntsman";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ready-to-wear" element={<ReadyToWear />} />
          <Route path="/company" element={<Company />} />
          <Route path="/suiting" element={<Suiting />} />
          <Route path="/jackets" element={<Jackets />} />
          <Route path="/outerwear" element={<Outerwear />} />
          <Route path="/knitwear" element={<Knitwear />} />
          <Route path="/bespoke" element={<Bespoke />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/search" element={<Search />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/size-guide" element={<SizeGuide />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/care-instructions" element={<CareInstructions />} />
          <Route path="/collections/suits" element={<SuitsCollection />} />
          <Route path="/collections/autumn-winter-2025" element={<AutumnWinter />} />
          <Route path="/collections/jackets" element={<JacketsCollection />} />
          <Route path="/collections/eveningwear" element={<EveningwearCollection />} />
          <Route path="/collections/outerwear" element={<OuterwearCollection />} />
          <Route path="/collections/ties" element={<TiesCollection />} />
          <Route path="/bespoke-womens" element={<BespokeWomens />} />
          <Route path="/world-of-huntsman" element={<WorldOfHuntsman />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
