import { format } from 'date-fns';

export const formatDate = start => {
    return format(Date.parse(start), 'dd MMMM yyyy HH:mm')
}
