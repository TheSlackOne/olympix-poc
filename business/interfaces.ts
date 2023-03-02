export interface IVulnerability {
    name: string,
    fileName: string,
    patching: string,
    description: string,
    quickFix: string,
}

export interface IBugList {
    vulnName: string,
    char_start: number,
    char_end: number,
    fileName: string,
    patching: string,
    description: string,
    quickFix: string,
}
