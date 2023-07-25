import { UserType } from '~/types/user';

export default function () {
	const userCookie = useCookie('user');

	const router = useRouter();

	const user = useState<UserType>('user', () => null);

	if (userCookie.value) {
		user.value = userCookie.value as UserType;
	}

	watch(
		() => userCookie.value,
		() => {
			if (userCookie.value) {
				user.value = userCookie.value as UserType;
			}
		}
	);

	const registerByName = (nameValue: string) => {
		const color = getRandomColor();
		user.value = {
			name: nameValue,
			image: {
				color
			}
		};
		userCookie.value = JSON.stringify(user.value);
		router.push('/');
	};

	const logout = () => {
		user.value = null;
		userCookie.value = null;
		router.push('/registration-by-name');
	};

	return {
		user,
		registerByName,
		logout
	};
}
