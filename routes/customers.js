import supabase from "../config/supabaseClient.js";

const customersform = async (req, res) => {
  try {
    const { name, phone, package: packageName, amountPaid } = req.body;

    const { data, error } = await supabase
      .from("customers")
      .insert([{ name, phone, package: packageName, amount_paid: amountPaid }])
      .select();

    if (error) {
      console.error("Supabase insert error:", error);
      return res.status(500).json({ success: false, error: error.message });
    }

    res.status(200).json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    res.status(500).json({ success: false, error: "Server error" });
  }
};

export default customersform;
