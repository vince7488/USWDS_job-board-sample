insert into public.instruments (id, name, section)
values
  (1, 'Aurora', 'strings'),
  (2, 'Cascade', 'percussion'),
  (3, 'Solstice', 'brass')
on conflict (id) do update
set
  name = excluded.name,
  section = excluded.section;
