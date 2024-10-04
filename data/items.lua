return {
	-- ['testburger'] = {
	-- 	label = 'Test Burger',
	-- 	weight = 220,
	-- 	degrade = 60,
	-- 	client = {
	-- 		image = 'burger_chicken.png',
	-- 		status = { hunger = 200000 },
	-- 		anim = 'eating',
	-- 		prop = 'burger',
	-- 		usetime = 2500,
	-- 		export = 'ox_inventory_examples.testburger'
	-- 	},
	-- 	server = {
	-- 		export = 'ox_inventory_examples.testburger',
	-- 		test = 'what an amazingly delicious burger, amirite?'
	-- 	},
	-- 	buttons = {
	-- 		{
	-- 			label = 'Lick it',
	-- 			action = function(slot)
	-- 				print('You licked the burger')
	-- 			end
	-- 		},
	-- 		{
	-- 			label = 'Squeeze it',
	-- 			action = function(slot)
	-- 				print('You squeezed the burger :(')
	-- 			end
	-- 		},
	-- 		{
	-- 			label = 'What do you call a vegan burger?',
	-- 			group = 'Hamburger Puns',
	-- 			action = function(slot)
	-- 				print('A misteak.')
	-- 			end
	-- 		},
	-- 		{
	-- 			label = 'What do frogs like to eat with their hamburgers?',
	-- 			group = 'Hamburger Puns',
	-- 			action = function(slot)
	-- 				print('French flies.')
	-- 			end
	-- 		},
	-- 		{
	-- 			label = 'Why were the burger and fries running?',
	-- 			group = 'Hamburger Puns',
	-- 			action = function(slot)
	-- 				print('Because they\'re fast food.')
	-- 			end
	-- 		}
	-- 	},
	-- 	consume = 0.3
	-- },

	-- ['bandage'] = {
	-- 	label = 'Bandage',
	-- 	weight = 115,
	-- 	client = {
	-- 		anim = { dict = 'missheistdockssetup1clipboard@idle_a', clip = 'idle_a', flag = 49 },
	-- 		prop = { model = `prop_rolled_sock_02`, pos = vec3(-0.14, -0.14, -0.08), rot = vec3(-50.0, -50.0, 0.0) },
	-- 		disable = { move = true, car = true, combat = true },
	-- 		usetime = 2500,
	-- 	}
	-- },

	['black_money'] = {
		label = 'Dirty Money',
		tipologia = 'valuta',
		rarity = 'speciale',
	},
	['pokeball'] = {
		label = 'KaruzzBall',
		tipologia = 'utensile',
		rarity = 'speciale',
	},
	-- ['burger'] = {
	-- 	label = 'Burger',
	-- 	weight = 220,
	-- 	client = {
	-- 		status = { hunger = 200000 },
	-- 		anim = 'eating',
	-- 		prop = 'burger',
	-- 		usetime = 2500,
	-- 		notification = 'You ate a delicious burger'
	-- 	},
	-- },

	-- ['sprunk'] = {
	-- 	label = 'Sprunk',
	-- 	weight = 350,
	-- 	client = {
	-- 		status = { thirst = 200000 },
	-- 		anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
	-- 		prop = { model = `prop_ld_can_01`, pos = vec3(0.01, 0.01, 0.06), rot = vec3(5.0, 5.0, -180.5) },
	-- 		usetime = 2500,
	-- 		notification = 'You quenched your thirst with a sprunk'
	-- 	}
	-- },

	-- ['parachute'] = {
	-- 	label = 'Parachute',
	-- 	weight = 8000,
	-- 	stack = false,
	-- 	client = {
	-- 		anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
	-- 		usetime = 1500
	-- 	}
	-- },

	-- ['garbage'] = {
	-- 	label = 'Garbage',
	-- },

	-- ['paperbag'] = {
	-- 	label = 'Paper Bag',
	-- 	weight = 1,
	-- 	stack = false,
	-- 	close = false,
	-- 	consume = 0
	-- },

	-- ['identification'] = {
	-- 	label = 'Identification',
	-- 	client = {
	-- 		image = 'card_id.png'
	-- 	}
	-- },

	-- ['panties'] = {
	-- 	label = 'Knickers',
	-- 	weight = 10,
	-- 	consume = 0,
	-- 	client = {
	-- 		status = { thirst = -100000, stress = -25000 },
	-- 		anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
	-- 		prop = { model = `prop_cs_panties_02`, pos = vec3(0.03, 0.0, 0.02), rot = vec3(0.0, -13.5, -1.5) },
	-- 		usetime = 2500,
	-- 	}
	-- },

	-- ['lockpick'] = {
	-- 	label = 'Lockpick',
	-- 	weight = 160,
	-- },

	-- ['phone'] = {
	-- 	label = 'Phone',
	-- 	weight = 190,
	-- 	stack = false,
	-- 	consume = 0,
	-- 	client = {
	-- 		add = function(total)
	-- 			if total > 0 then
	-- 				pcall(function() return exports.npwd:setPhoneDisabled(false) end)
	-- 			end
	-- 		end,

	-- 		remove = function(total)
	-- 			if total < 1 then
	-- 				pcall(function() return exports.npwd:setPhoneDisabled(true) end)
	-- 			end
	-- 		end
	-- 	}
	-- },

	-- ['money'] = {
	-- 	label = 'Money',
	-- },

	-- ['mustard'] = {
	-- 	label = 'Mustard',
	-- 	weight = 500,
	-- 	client = {
	-- 		status = { hunger = 25000, thirst = 25000 },
	-- 		anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
	-- 		prop = { model = `prop_food_mustard`, pos = vec3(0.01, 0.0, -0.07), rot = vec3(1.0, 1.0, -1.5) },
	-- 		usetime = 2500,
	-- 		notification = 'You.. drank mustard'
	-- 	}
	-- },

	-- ['water'] = {
	-- 	label = 'Water',
	-- 	weight = 500,
	-- 	client = {
	-- 		status = { thirst = 200000 },
	-- 		anim = { dict = 'mp_player_intdrink', clip = 'loop_bottle' },
	-- 		prop = { model = `prop_ld_flow_bottle`, pos = vec3(0.03, 0.03, 0.02), rot = vec3(0.0, 0.0, -1.5) },
	-- 		usetime = 2500,
	-- 		cancel = true,
	-- 		notification = 'You drank some refreshing water'
	-- 	}
	-- },

	['radio'] = {
		label = 'Radio',
		tipologia = 'utensile',
		rarity = 'epico',
		weight = 1000,
		stack = false,
		allowArmed = true
	},

	-- ['armour'] = {
	-- 	label = 'Bulletproof Vest',
	-- 	weight = 3000,
	-- 	stack = false,
	-- 	client = {
	-- 		anim = { dict = 'clothingshirt', clip = 'try_shirt_positive_d' },
	-- 		usetime = 3500
	-- 	}
	-- },

	-- ['clothing'] = {
	-- 	label = 'Clothing',
	-- 	consume = 0,
	-- },

	-- ['mastercard'] = {
	-- 	label = 'Fleeca Card',
	-- 	stack = false,
	-- 	weight = 10,
	-- 	client = {
	-- 		image = 'card_bank.png'
	-- 	}
	-- },

	-- ['scrapmetal'] = {
	-- 	label = 'Scrap Metal',
	-- 	weight = 80,
	-- },

	-- ["alive_chicken"] = {
	-- 	label = "Living chicken",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["blowpipe"] = {
	-- 	label = "Blowtorch",
	-- 	weight = 2,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["bread"] = {
	-- 	label = "Bread",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["cannabis"] = {
	-- 	label = "Cannabis",
	-- 	weight = 3,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["carokit"] = {
	-- 	label = "Body Kit",
	-- 	weight = 3,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["carotool"] = {
	-- 	label = "Tools",
	-- 	weight = 2,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["clothe"] = {
	-- 	label = "Cloth",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["copper"] = {
	-- 	label = "Copper",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["cutted_wood"] = {
	-- 	label = "Cut wood",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["diamond"] = {
	-- 	label = "Diamond",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["essence"] = {
	-- 	label = "Gas",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["fabric"] = {
	-- 	label = "Fabric",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["fish"] = {
	-- 	label = "Fish",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["fixkit"] = {
	-- 	label = "Repair Kit",
	-- 	weight = 3,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["fixtool"] = {
	-- 	label = "Repair Tools",
	-- 	weight = 2,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["gazbottle"] = {
	-- 	label = "Gas Bottle",
	-- 	weight = 2,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["gold"] = {
	-- 	label = "Gold",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["iron"] = {
	-- 	label = "Iron",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["marijuana"] = {
	-- 	label = "Marijuana",
	-- 	weight = 2,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["medikit"] = {
	-- 	label = "Medikit",
	-- 	weight = 2,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["packaged_chicken"] = {
	-- 	label = "Chicken fillet",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["packaged_plank"] = {
	-- 	label = "Packaged wood",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["petrol"] = {
	-- 	label = "Oil",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["petrol_raffin"] = {
	-- 	label = "Processed oil",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["slaughtered_chicken"] = {
	-- 	label = "Slaughtered chicken",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["stone"] = {
	-- 	label = "Stone",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["washed_stone"] = {
	-- 	label = "Washed stone",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["wood"] = {
	-- 	label = "Wood",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	-- ["wool"] = {
	-- 	label = "Wool",
	-- 	weight = 1,
	-- 	stack = true,
	-- 	close = true,
	-- },

	["alive_chicken"] = {
		label = "Living chicken",
		close = 1,
		description = true
	},

	["bandage"] = {
		label = "Bandage",
		close = 2,
		description = true
	},

	["blowpipe"] = {
		label = "Blowtorch",
		close = 2,
		description = true
	},

	["bread"] = {
		label = "Bread",
		close = 1,
		description = true
	},

	["cannabis"] = {
		label = "Cannabis",
		close = 3,
		description = true
	},

	["carokit"] = {
		label = "Body Kit",
		close = 3,
		description = true
	},

	["carotool"] = {
		label = "Tools",
		close = 2,
		description = true
	},

	["clothe"] = {
		label = "Cloth",
		close = 1,
		description = true
	},

	["copper"] = {
		label = "Copper",
		close = 1,
		description = true
	},

	["cutted_wood"] = {
		label = "Cut wood",
		close = 1,
		description = true
	},

	["diamond"] = {
		label = "Diamond",
		close = 1,
		description = true
	},

	["essence"] = {
		label = "Gas",
		close = 1,
		description = true
	},

	["fabric"] = {
		label = "Fabric",
		close = 1,
		description = true
	},

	["fish"] = {
		label = "Fish",
		close = 1,
		description = true
	},

	["fixkit"] = {
		label = "Repair Kit",
		close = 3,
		description = true
	},

	["fixtool"] = {
		label = "Repair Tools",
		close = 2,
		description = true
	},

	["gazbottle"] = {
		label = "Gas Bottle",
		close = 2,
		description = true
	},

	["gold"] = {
		label = "Gold",
		close = 1,
		description = true
	},

	["iron"] = {
		label = "Iron",
		close = 1,
		description = true
	},

	["marijuana"] = {
		label = "Marijuana",
		close = 2,
		description = true
	},

	["medikit"] = {
		label = "Medikit",
		close = 2,
		description = true
	},

	["packaged_chicken"] = {
		label = "Chicken fillet",
		close = 1,
		description = true
	},

	["packaged_plank"] = {
		label = "Packaged wood",
		close = 1,
		description = true
	},

	["petrol"] = {
		label = "Oil",
		close = 1,
		description = true
	},

	["petrol_raffin"] = {
		label = "Processed oil",
		close = 1,
		description = true
	},

	["phone"] = {
		label = "Phone",
		close = 1,
		description = true
	},

	["slaughtered_chicken"] = {
		label = "Slaughtered chicken",
		close = 1,
		description = true
	},

	["stone"] = {
		label = "Stone",
		close = 1,
		description = true
	},

	["washed_stone"] = {
		label = "Washed stone",
		close = 1,
		description = true
	},

	["water"] = {
		label = "Water",
		close = 1,
		description = true
	},

	["wood"] = {
		label = "Wood",
		close = 1,
		description = true
	},

	["wool"] = {
		label = "Wool",
		close = 1,
		description = true
	},
}
