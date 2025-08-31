export default function NotificationButton() {
  const handleClick = () => {
    if ("Notification" in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Du nouveau chez la Casa Di Toma !", {
            body: "Découvrez nos dernières nouveautés et offres.",
            icon: "/icon512_maskable.png",
          });
        }
      });
    }
  };

  return (
    <button
      className="bg-[#9a3737] text-white px-4 py-2 mt-3 rounded-full font-semibold shadow-md hover:bg-[#7d2d2d] transition"
      onClick={handleClick}
    >
      Recevoir les notifications
    </button>
  );
}
