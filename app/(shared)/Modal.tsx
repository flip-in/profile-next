import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

type ImageObj = {
  desktop: {
    path: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
  mobile: {
    path: string;
    alt: string;
    width: number;
    height: number;
    priority?: boolean;
  };
};

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  images: ImageObj[];
};

const Modal = ({ isOpen, closeModal, images }: ModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isOpen) return null;

  const goNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30"
      onClick={closeModal}
    >
      <div className="relative flex items-center justify-center bg-white rounded-lg">
        {images.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-0 md:-left-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f6f4f0] text-gray-500 z-10"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={goNext}
              className="absolute right-0 md:-right-4 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#f6f4f0] text-gray-500 z-10"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        )}
        {images.map(
          (image, index) =>
            currentImageIndex === index && (
              <Image
                key={isMobile ? image.mobile.path : image.desktop.path}
                src={isMobile ? image.mobile.path : image.desktop.path}
                alt={isMobile ? image.mobile.alt : image.desktop.alt}
                width={isMobile ? image.mobile.width : image.desktop.width}
                height={isMobile ? image.mobile.height : image.desktop.height}
                priority={
                  isMobile ? image.mobile.priority : image.desktop.priority
                }
              />
            )
        )}
      </div>
    </div>,
    document.body // portal element
  );
};

export default Modal;
