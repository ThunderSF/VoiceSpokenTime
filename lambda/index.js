exports.handler = async (event) => {
    if (!event.Details) return null;
    if (!event.Details.Parameters) return null;
    if (!event.Details.Parameters.time) return null;
    let language = 'English';
    if (event.Details.Parameters.language) language = event.Details.Parameters.language;
    let vocabulary = {
        'english': {
            minute: 'minute',
            minutes: 'minutes',
            hour: 'hour',
            hours: 'hours',
            connector: ''
        },
        'spanish': {
            minute: 'minuto',
            minutes: 'minutos',
            hour: 'hora',
            hours: 'horas',
            connector: 'y'
        },
        'french': {
            minute: 'minute',
            minutes: 'minutes',
            hour: 'heure',
            hours: 'heures',
            connector: ''
        }
    }
    let words = vocabulary['english'];
    if (vocabulary[language.toLowerCase()]) words = vocabulary[language.toLowerCase()];
    let hours = 0;
    let minutes = Math.round(event.Details.Parameters.time);
    if (minutes > 60) {
        hours = Math.floor(minutes / 60);
        minutes = minutes % 60;
    }
    let prompt = '';
    if (hours > 0) {
        prompt = hours + ' ' + (hours == 1 ? words['hour'] : words['hours']);
        if (minutes > 5) {
            prompt += ' ' + words['connector'] + ' ' + minutes + ' ' + words['minutes'];
        }
    }
    else {
        prompt += minutes + ' ' + (minutes == 1 ? words['minute'] : words['minutes']);
    }
    return {
        timePrompt: prompt    
    };
};