interface Episode {
    id: number;
    number: number;
    name: string;
    description?: string;
    watched: boolean;
}

export default Episode;