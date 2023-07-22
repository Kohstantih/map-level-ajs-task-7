import Settings from "../js/Settings";

test(('check default Settings'), () => {
    const settings = new Settings()
    const received = Array.from(settings.defaultSettings);
    const expected = [
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
    ];

    expect(received).toEqual(expected);
    expect(settings.userSettings.size).toBe(0);    
})

test.each([
    ['music', 'off', [['music', 'off']]],
    ['volume', 'trance', 'Параметр настройки отсутствует'],
    ['music', 'classic', 'Этот вариант музыкального оформления отсутствует'],
    ['theme', 'light', [['theme', 'light']]],
    ['theme', undefined, 'Недопустимый вариант темы'],
    ['difficulty', 'hard', [['difficulty', 'hard']]],
    ['difficulty', '', 'Такого уровня сложности нет']
])(('check setUserSettings'), (key, value, expected) => {
    let received;
    try {
        const settings = new Settings();
        settings.setUserSettings(key, value);
        received = Array.from(settings.userSettings)
    } catch (error) {
        received = error.message;
    }

    expect(received).toEqual(expected)
})

test(('check \"getSettings\"'), () => {
    const settings = new Settings();
    settings.setUserSettings('music', 'off')
    const received = Array.from(settings.getSettings());
    const expected = [
        ['theme', 'dark'],
        ['music', 'off'],
        ['difficulty', 'easy']
    ];

    expect(received).toEqual(expected);    
})