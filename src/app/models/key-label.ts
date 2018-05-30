export class KeyLabel<T = string> {
  key: T;
  label: string;

  static mapAvailableValues(items: string[], defaultLabel: string, defaultValue: string = ''): KeyLabel<string>[] {
    const map: KeyLabel<string>[] = [];
    map.push({key: defaultValue, label: defaultLabel});

    items.forEach(item => {
      map.push({key: item, label: item});
    });

    return map;
  }

  static mapAvailableValuesFromObjects<T>(items: T[], defaultValue: T, defaultLabel: string, getLabel: (item: T) => string): KeyLabel<T>[] {
    const map: KeyLabel<T>[] = [];
    map.push({key: defaultValue, label: defaultLabel});

    items.forEach(item => {
      map.push({key: item, label: getLabel(item)});
    });

    return map;
  }
}
