export function formatDate(date) { /* formata data e horario */
    return new Date(date).toLocaleString('pt-BR', {
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit', 
    })
}