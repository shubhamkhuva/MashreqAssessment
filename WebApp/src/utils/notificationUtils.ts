import { getRandomNumber } from "./helper";

export async function sendNotification(token: string) {
  const payload = {
    to: token,
    collapse_key: "type_a",
    data: {
      message: "Your account has been logged in to Web!",
      title: "Account LoggedIn",
      id: getRandomNumber(1111, 9999),
      key_2: "Hellowww",
    },
  };

  try {
    const response = await fetch("https://fcm.googleapis.com/fcm/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "key=AAAAu2G_IPo:APA91bGFaDF5ZJnVThtclN8ooq4U-TAl0xbrbwcYK2WUhgX70u8pQpg8nBgoL_1-qj8hxgO6M4m21HTughA0PoiLipbk1hyn4AWmT5zGOO54W_itNCnC0K_qbItZ1HL6AalutneplR9H",
      },
      body: JSON.stringify(payload),
    });

    if (response.ok) {
      console.log("Notification sent successfully");
      // Handle success as needed
    } else {
      console.error("Failed to send notification:", response.statusText);
      // Handle failure as needed
    }
  } catch (error) {
    console.error("Error sending notification:", error);
    // Handle error as needed
  }
}
