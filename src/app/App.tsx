import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { GPUPage } from "./pages/GPUPage";
import { ComputePage } from "./pages/ComputePage";
import { StoragePage } from "./pages/StoragePage";
import { Solutions } from "./pages/Solutions";
import { Pricing } from "./pages/Pricing";
import { Contact } from "./pages/Contact";

import { VirtualMachinesPage } from "./pages/VirtualMachinesPage";
import { KubernetesPage } from "./pages/KubernetesPage";
import { S3StoragePage } from "./pages/S3StoragePage";
import { BlockStoragePage } from "./pages/BlockStoragePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/gpu-cloud" element={<GPUPage />} />
          <Route path="products/compute" element={<ComputePage />} />
          <Route path="products/compute/virtual-machines" element={<VirtualMachinesPage />} />
          <Route path="products/compute/kubernetes" element={<KubernetesPage />} />
          <Route path="products/storage" element={<StoragePage />} />
          <Route path="products/storage/s3-object-storage" element={<S3StoragePage />} />
          <Route path="products/storage/s3" element={<S3StoragePage />} />
          <Route path="products/storage/block-storage-volumes" element={<BlockStoragePage />} />
          <Route path="products/storage/block" element={<BlockStoragePage />} />

          <Route path="solutions" element={<Solutions />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}