import db from '@/utils/db';

export async function GET(req) {
  return new Promise((resolve) => {
    db.query('SELECT * FROM menu', (err, results) => {
      if (err) {
        resolve(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
      } else {
        resolve(new Response(JSON.stringify(results), { status: 200 }));
      }
    });
  });
}

export async function POST(req) {
  const { item_name, sub_category, category, amount, availability, photo } = await req.json();

  if (!item_name || !sub_category || !category || amount == null || availability == null || !photo) {
    return new Response(JSON.stringify({ error: 'All fields are required.' }), { status: 400 });
  }

  return new Promise((resolve) => {
    db.query(
      'INSERT INTO menu (id,item_name, sub_category, category, amount, availability, photo) VALUES (?, ?, ?, ?, ?, ?)',
      [id,item_name, sub_category, category, amount, availability, photo],
      (err) => {
        if (err) {
          resolve(new Response(JSON.stringify({ error: err.message }), { status: 500 }));
        } else {
          resolve(new Response(JSON.stringify({ message: 'Menu item added successfully' }), { status: 201 }));
        }
      }
    );
  });
}
