SELECT app_name, rating, category FROM analytics
  WHERE (rating, category) in (
    SELECT MAX(rating), category FROM analytics
      WHERE min_installs >= 50000
      GROUP BY category
    )
  ORDER BY category;

SELECT * FROM analytics 
  WHERE app_name ILIKE '%facebook%';

SELECT * FROM analytics 
  WHERE  array_length(genres, 1) = 2;

SELECT * FROM analytics 
  WHERE genres @> '{"Education"}';