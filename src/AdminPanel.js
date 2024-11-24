import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "./firebase";
import { addDoc, collection } from "firebase/firestore";

function AdminPanel() {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `questions/${file.name}`);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);

    // Save metadata to Firestore
    await addDoc(collection(db, "slides"), {
      type: "question",
      image: url,
      chapter: "Math",
      complexity: "Easy",
    });

    alert("File uploaded!");
  };

  return <input type="file" onChange={handleUpload} />;
}

export default AdminPanel;
