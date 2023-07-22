export default class Settings {
  constructor() {
    this.defaultSettings = new Map([
      ['theme', 'dark'],
      ['music', 'trance'],
      ['difficulty', 'easy'],
    ]);
    this.userSettings = new Map();
  }

  setUserSettings(key, value) {
    const accessibleSettings = ['theme', 'music', 'difficulty'];
    const accessibleTheme = ['dark', 'light', 'gray'];
    const accessibleMusik = ['trance', 'pop', 'rock', 'chillout', 'off'];
    const accessibleDifficulty = ['easy', 'normal', 'hard', 'nightmare'];

    if (!accessibleSettings.includes(key)) throw new Error('Параметр настройки отсутствует');

    if (key === 'theme') {
      if (!accessibleTheme.includes(value)) throw new Error('Недопустимый вариант темы');
    }
    if (key === 'music') {
      if (!accessibleMusik.includes(value)) throw new Error('Этот вариант музыкального оформления отсутствует');
    }
    if (key === 'difficulty') {
      if (!accessibleDifficulty.includes(value)) throw new Error('Такого уровня сложности нет');
    }

    this.userSettings.set(key, value);
  }

  getSettings() {
    return new Map([...this.defaultSettings, ...this.userSettings]);
  }
}
