import sys
from PIL import Image

def crop_bottom(image_path, crop_height):
    img = Image.open(image_path)
    width, height = img.size
    cropped_img = img.crop((0, 0, width, height - crop_height))
    cropped_img.save(image_path)
    print(f"Cropped {image_path}, new size: {cropped_img.size}")

files = [
    "public/images/medical/medical-cover.webp",
    "public/images/食品報價/portfolio-food-quotation-system-cover.webp",
    "public/images/補習班/portfolio-tutoring-system-cover-v2.webp",
    "public/images/器材租潤/portfolio-film-equipment-rental-cover-v2.webp"
]

for f in files:
    crop_bottom(f, 120)

