import csv
import json

# Read and convert CSV to JavaScript
with open('questions.csv', newline='', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

questions = []
for idx, row in enumerate(rows):
    answers = [int(x) for x in row.get('correct_answers', '').split(',') if x.strip()]
    options = []
    for i in range(1, 7):
        val = row.get(f'option_{i}')
        if val and val.strip():
            options.append({'id': i, 'value': val})

    questions.append({
        'id': f"{row.get('source_file','')}_{row.get('number','')}_{idx}",
        'number': int(row.get('number', '0') or 0),
        'question': row.get('question', ''),
        'options': options,
        'answers': answers,
        'explanation': row.get('explanation', ''),
        'reference': row.get('reference_url', ''),
        'source': row.get('source_file', ''),
        'testNumber': int(row.get('test_number', '0') or 0) or None,
    })

# Write as JavaScript module
with open('docs/questions-data.js', 'w', encoding='utf-8') as f:
    f.write('// Auto-generated questions data\n')
    f.write('const QUESTIONS_DATA = ')
    json.dump(questions, f, indent=2, ensure_ascii=False)
    f.write(';\n')

print(f'Created docs/questions-data.js with {len(questions)} questions')
