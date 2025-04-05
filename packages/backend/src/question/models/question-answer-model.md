### data model for the types of questions

- MULTIPLE_CHOICE

```ts
{
  choices: [
    { text: 'Option A', correctAnswer: false },
    { text: 'Option B', correctAnswer: true },
    { text: 'Option C', correctAnswer: false },
    { text: 'Option D', correctAnswer: false },
  ];
}
```

- TRUE_FALSE

```ts
{
  correctAnswer: false;
}
```

- FILL_IN_THE_BLANK

```ts
{
  correctAnswers: ['Einstein', 'Albert Einstein', 'etc'];
}
```

- ORDERING

```ts
{
  correctOrder: ['Step 1', 'Step 2', 'Step 3', 'etc'];
}
```

- ESTIMATE

```ts
{
  correctAnswer: 400;
}
```

- NUMERIC

```ts
{
  correctAnswer: 42;
}
```

- IMAGE_QUESTION

```ts
{
  correctImageUrl: 'https://example.com/image.png';
  correctAnswer: 'Picture of a molecule';
}
```

- MUSIC_QUESTION

```ts
{
  audioUrl: 'https://example.com/audio.mp3',
  correctAnswer: 'Beethoven',
  choices?: ['Beethoven', 'Mozart', 'Bach']
}
```

- VIDEO_QUESTION

```ts
{
  videoUrl: 'https://example.com/video.mp4',
  correctAnswer: 'He opens the door'
}
```
