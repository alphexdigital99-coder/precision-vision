import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import type { Photo } from "@/lib/site-data";

export function PhotoGallery({
  photos,
  layout = "editorial",
}: {
  photos: Photo[];
  layout?: "editorial" | "masonry";
}) {
  const [index, setIndex] = useState<number | null>(null);
  const lastRef = useRef<HTMLElement | null>(null);
  const photo = index !== null ? photos[index] : undefined;
  const move = (d: number) =>
    setIndex((c) => (c === null ? null : (c + d + photos.length) % photos.length));
  return (
    <>
      <div className={layout === "editorial" ? "gallery-grid" : "masonry-grid"}>
        {photos.map((item, i) => (
          <Button
            variant="ghost"
            className="gallery-item image-reveal reveal"
            key={item.image + i}
            onClick={(e) => {
              lastRef.current = e.currentTarget;
              setIndex(i);
            }}
            aria-label={`Open photo: ${item.caption}`}
          >
            <img src={item.image} alt={item.alt} loading="lazy" />
            <span className="gallery-caption">
              {item.caption}
              <ZoomIn />
            </span>
          </Button>
        ))}
      </div>
      <Dialog
        open={photo !== undefined}
        onOpenChange={(o) => {
          if (!o) setIndex(null);
        }}
      >
        <DialogContent
          onCloseAutoFocus={(e) => {
            e.preventDefault();
            lastRef.current?.focus();
          }}
          className="gallery-dialog"
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") move(1);
            if (e.key === "ArrowLeft") move(-1);
          }}
        >
          {photo && (
            <>
              <DialogTitle>{photo.caption}</DialogTitle>
              <DialogDescription className="sr-only">
                Authentic photographs from Rathnayaka Fittres.
              </DialogDescription>
              <img key={photo.image} className="lightbox-photo" src={photo.image} alt={photo.alt} />
              <div className="lightbox-controls">
                <p>
                  Rathnayaka Fittres · {(index ?? 0) + 1} / {photos.length}
                </p>
                <div>
                  <Button variant="soft" aria-label="Previous photograph" onClick={() => move(-1)}>
                    <ChevronLeft />
                  </Button>
                  <Button variant="soft" aria-label="Next photograph" onClick={() => move(1)}>
                    <ChevronRight />
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
