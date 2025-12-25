// Yıldız puanlama bileşeni - 1-5 arası puanı yıldız olarak gösterir
function Rating({ rating }) {
  const stars = []; // Yıldız elemanlarını tutacak dizi

  // Rating değerini güvenli hale getir (0-5 arası)
  const safeRating = Math.min(Math.max(0, Math.round(rating)), 5);

  // Dolu yıldızları ekle
  for (let i = 0; i < safeRating; i++) {
    stars.push(
      <span className="glyphicon glyphicon-star" key={i}>
        {" "}
      </span>
    );
  }

  // Boş yıldızları ekle
  for (let i = safeRating; i < 5; i++) {
    stars.push(
      <span className="glyphicon glyphicon-star-empty" key={i}>
        {" "}
      </span>
    );
  }

  // Oluşturulan yıldız dizisini döndür
  return stars;
}

// Bileşeni dışa aktar
export default Rating;
