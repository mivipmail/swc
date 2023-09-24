<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;
use App\Http\Resources\EventResource;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            return response()->json([
                'result' => EventResource::collection(Event::all()),
                'error' => null,
            ]);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

    public function follow($id)
    {
        try {
            $event = Event::find($id);
            if(!$event)
                return response()->json([
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ], 404);

            $event->memberUsers()->attach(auth()->user()->id);
            $event->refresh();
            return response()->json([
                'result' => new EventResource($event),
                'error' => null,
            ]);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

    public function unfollow($id)
    {
        try {
            $event = Event::find($id);
            if(!$event)
                return response()->json([
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ], 404);

            $event->memberUsers()->detach(auth()->user()->id);
            $event->refresh();
            return response()->json([
                'result' => new EventResource($event),
                'error' => null,
            ]);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

    public function store(Request $request)
    {
        try {
            $data = $request->all();

            $event = Event::create([
                'title' => $data['title'],
                'content' => $data['content'],
                'user_id' => $data['user_id'],
            ]);

            return response()->json([
                'result' => new EventResource($event),
                'error' => null,
            ]);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

    public function show($id)
    {
        try {
            $event = Event::find($id);

            if($event) 
                return response()->json([
                    'result' => new EventResource($event),
                    'error' => null,
                ]);
            else
                return response()->json([
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ], 404);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }

    public function update(Request $request, Event $event)
    {
        //
    }

    public function destroy($id)
    {
        try {
            $event = Event::find($id);
            if(!$event)
                return response()->json([
                    'result' => null,
                    'error' => 'Не удалось найти событие с id ' . $id,
                ], 404);

            $event->delete();
            
            return response()->json([
                'result' => 'Ok',
                'error' => null,
            ]);
        }
        catch (\Exception $e) {
            return response()->json([
                'result' => null,
                'error' => $e->getMessage(),
            ], 403);
        }
    }
}
