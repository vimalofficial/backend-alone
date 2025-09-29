import supabase from "../config/supabaseClient.js";

const getdata = async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("customers")
      .select("*");

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getdata;

