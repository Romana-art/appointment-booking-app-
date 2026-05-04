// src/App.tsx (Main Logic)
// یہاں ہم نے تمام اسٹیٹس (Date, Time, Form) اور فائر بیس کے ساتھ ڈیٹا سیو کرنے کی لاجک رکھی ہے۔

const handleSubmit = async (formData, selectedDate, selectedTime, user) => {
  if (!user) return;
  
  const bookingData = {
    userId: user.uid,
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
    notes: formData.notes,
    date: selectedDate, // e.g. 2024-05-04
    time: selectedTime,
    status: 'confirmed',
    createdAt: serverTimestamp()
  };

  try {
    // Firestore میں ڈیٹا محفوظ کرنا
    await addDoc(collection(db, 'bookings'), bookingData);
    return true; // Success
  } catch (error) {
    console.error("Booking Error:", error);
    return false;
  }
};
